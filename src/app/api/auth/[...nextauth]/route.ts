import { connectDB } from "@/libs/db"
import User from "@/models/user";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'john@email.co'},
        password: { label: 'password', type: 'password', placeholder: '********'},
      },
      async authorize(credentials, req) {
        await connectDB();
        const userFound = await User.findOne({ email: credentials?.email }).select('+password');
        if (!userFound)  throw new Error('Invalid credentials');

        const passwordMatch = await bcrypt.compare(credentials?.password!, userFound.password);
        if (!passwordMatch) throw new Error('Invalid credentials');

        return userFound;
      },
    })
  ],
  callbacks: {
    jwt({ account, user, token, profile, session }: any) {
      if (user) token.user = user;
      return token;
    },
    session({ token, session }: any) {
      session.user = token.user as any;
      return session;
    }
  },
  pages: {
    signIn: '/login',
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
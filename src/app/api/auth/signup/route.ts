import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { connectDB } from "@/libs/db";

export async function POST(req: Request) {
    const { fullname, email, password } = await req.json();

    if (!password || password.length < 6) {
      return NextResponse.json({
        message: 'Password must be at least 6 characters'
      }, { status: 400 });
    }

    try {
      await connectDB();
      const userFound = await User.findOne({ email });
      if (userFound) {
        return NextResponse.json({
          message: 'Email already exist'
        }, { status: 409 });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const user = new User({
        email,
        fullname,
        password: hashedPassword,
        role: 'CLIENT'
      });
      const createdUser = await user.save()
  
      return NextResponse.json({
        id: createdUser._id,
        email,
        fullname,
        role: createdUser.role
      })
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({
          message: error.message,
        }, { status: 400 });
      }
    }
}
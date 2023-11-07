'use client'
import Container from '@/components/container/Container';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface Props {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  return (
    <SessionProvider>
      <Container>
        {children}
      </Container>
    </SessionProvider>
  )
}

export default Provider

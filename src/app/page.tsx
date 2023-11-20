'use client';

import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Icon, Text } from '@chakra-ui/react';
import { Logo } from '@/styles/icons';

export default function Home() {
  const auth: any = useAuth();

  return (
    <main>
      <Heading>Fast Feedback </Heading>
      <Logo boxSize={50}/>
      <Text>
        Current User: <Code>{auth.user ? auth.user.email : 'None'}</Code>
      </Text>
      {auth.user ? (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => auth.signInWithGithub()}>Sign In</Button>
      )}
    </main>
  );
}
'use client';

import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Icon, Text } from '@chakra-ui/react';

export default function Home() {
  const auth: any = useAuth();

  return (
    <main>
      <Heading>Fast Feedback </Heading>
      <Icon name='logo' />
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
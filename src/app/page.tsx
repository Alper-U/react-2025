"use client";

import { useAuth } from "@/lib/auth";
import { Button, Flex } from "@chakra-ui/react";
import { Logo } from "@/styles/icons";

export default function Home() {
  const auth: any = useAuth();

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Logo boxSize={50} />
      {auth.user ? (
        <Button mt={5} onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button mt={5} onClick={() => auth.signInWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}

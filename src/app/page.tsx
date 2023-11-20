"use client";

import { useAuth } from "@/lib/auth";
import { Box, Button, Code, Flex, Heading, Text } from "@chakra-ui/react";
import { Logo } from "@/styles/icons";
import EmptyState from "@/components/EmptyState";

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

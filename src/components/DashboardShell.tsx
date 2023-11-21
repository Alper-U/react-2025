import React from "react";
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  Heading,
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";
import { Logo } from "@/styles/icons";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }: Props) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack spacing={4} direction="row" alignItems="center">
          <Logo boxSize={6} display="block" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Link pr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex flexDirection="row" backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          flexDirection="column"
          maxWidth="1200px"
          ml="auto"
          mr="auto"
          width="100%"
        >
          <Box>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading pb={4}>My Sites</Heading>
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;

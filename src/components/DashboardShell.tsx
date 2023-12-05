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
} from "@chakra-ui/react";
import { Logo } from "@/styles/icons";
import { useAuth } from "@/lib/auth";
import AddSiteModal from "./AddSiteModal";

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
        width="100%"
        position="fixed"
      >
        <Stack spacing={4} direction="row" alignItems="center">
          <Logo boxSize={6} display="block" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          {auth.user && (
            <Link mr={4} onClick={() => auth.signOut()}>
              Log Out
            </Link>
          )}
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        backgroundColor="gray.100"
        p={8}
        height="100vh"
        pt={24}
      >
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
            <Flex justifyContent="space-between" mb={6}>
              <Heading>My Sites</Heading>
              {auth.user && <AddSiteModal>+ Add Site</AddSiteModal>}
            </Flex>
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;

import React from "react";
import { Heading, Box, Text, Button, Flex } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <DashboardShell>
    <Flex
      direction="column"
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      p={16}
      justify="center"
      align="center"
    >
      <Heading mb={2}>You haven't added any sites.</Heading>
      <Text mb={4}>Welcome 👋 Let's get started.</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
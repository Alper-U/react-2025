import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius={8} p={8}>
      <Heading>Get feedback on your site instantly.</Heading>
      <Text>Start today, then grow with us 🌱</Text>
      <Button variant="solid" size="md">
        Upgrade to starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;

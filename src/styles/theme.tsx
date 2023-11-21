import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";

export const theme = extendTheme({
  fonts: {
    body: "Inter Variable, sans-serif",
    heading: "Inter Variable, serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

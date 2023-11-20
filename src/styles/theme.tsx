import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    logo: {
      path: (
        <g
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path fill="#E8E8E8" d="M630.4 13.92V32H608c-36.8 68.8-8 108.8 0 116.8h27.2V296h304v32h-22.4c-36.8 68.8-8 107.2 0 116.8H944v341.856c50.576-79.376 80-173.552 80-274.656 0-242-167.936-444.64-393.6-498.08zM385.6 905.6v-176H171.2c-8 0-36.8-1.6-60.8-24-22.4-20.8-33.6-52.8-33.6-94.4V242.336C28.16 320.656 0 413.024 0 512c0 265.056 201.408 483.056 459.52 509.344-11.968-2.864-26.848-8.768-40.32-21.344-22.4-20.8-33.6-52.8-33.6-94.4zm89.6-611.2c-49.6 0-89.6 41.6-89.6 91.2 0-49.6 40-91.2 91.2-91.2h-1.6z" />
        </g>
      ),
      viewBox: "0 0 1024 1024"
    }
  }
});

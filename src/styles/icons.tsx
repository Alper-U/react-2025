import { createIcon } from "@chakra-ui/react";

export const Book = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 64 64",
  path: [
    <path key={0} fill="#F9EBB2" d="M56 62H10a4 4 0 0 1 0-8h46v8z" />,
    <g key={1} fill="#45AAB8">
      <path d="M6 4v49.537A5.968 5.968 0 0 1 10 52h2V2H8a2 2 0 0 0-2 2zM56 2H14v50h44V4a2 2 0 0 0-2-2z" />
    </g>,
    <g key={2} fill="#394240">
      <path d="M60 52V4c0-2.211-1.789-4-4-4H8C5.789 0 4 1.789 4 4v54a6 6 0 0 0 6 6h49a1 1 0 1 0 0-2h-1v-8a2 2 0 0 0 2-2zM6 4a2 2 0 0 1 2-2h4v50h-2a5.968 5.968 0 0 0-4 1.537V4zm50 58H10a4 4 0 0 1 0-8h46v8zm0-10H14V2h42a2 2 0 0 1 2 2v48h-2z" />
      <path d="M43 26H23a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2zM49 20H23a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zM23 16h12a1 1 0 1 0 0-2H23a1 1 0 1 0 0 2z" />
    </g>,
    <path
      key={3}
      fill="#231F20"
      d="M6 4v49.537A5.968 5.968 0 0 1 10 52h2V2H8a2 2 0 0 0-2 2z"
      opacity=".2"
    />,
  ],
});

export const Logo = createIcon({
  displayName: "Logo",
  viewBox: "0 0 24 24",
  path: [
    <path
      fill="none"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h6"
    />,
    <path
      fill="none"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />,
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
    />,
  ],
});

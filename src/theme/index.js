import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: "#111827",
    secondary: {
      main: "#10B981",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    body2: {
      fontSize: "0.875rem",
    },
  },
});

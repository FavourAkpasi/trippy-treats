import { styled } from "@mui/material";

export const TopLayoutContainer = styled("div")(({ theme }) => ({
  display: "block",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

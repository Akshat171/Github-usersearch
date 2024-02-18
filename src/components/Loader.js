import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: "1",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

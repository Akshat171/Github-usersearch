import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

import { Button, Container, Stack, TextField } from "@mui/material";
import React from "react";

export default function InputUser({ onChange, onClick }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 1, sm: 2 },
        pb: { xs: 2, sm: 3 },
      }}
    >
      <Stack
        display={"flex"}
        direction={{ xs: "column", sm: "row" }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
      >
        <TextField
          id="outlined-basic"
          hiddenLabel
          size="small"
          variant="outlined"
          type="text"
          name="name"
          onChange={onChange}
          placeholder="Enter github username"
          inputProps={{
            ariaLabel: "Enter github username",
          }}
        />

        <Button variant="contained" onClick={onClick} color="primary">
          {/* adding a button go to profile page*/}
          Find
        </Button>
      </Stack>
    </Container>
  );
}

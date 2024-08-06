import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating({ value = 0 }) {
  return (
    <Box
      style={{
        "& > legend": { mt: 2 },
        margin: 4,
        marginLeft:0
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}

import { Box } from "@mui/material";

export default function HomeTopBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        bgcolor: "primary.main",
        m: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        This is a form
      </Box>
    </Box>
  );
}

import { Box, Button, Container, Grid } from "@mui/material";
import "./App.css";
import HomeTopBanner from "./components/HomeTopBanner";
import { useState } from "react";
import RestaurantModal from "./components/RestaurantModal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Box sx={{ mb: "8rem" }}>Sample Title</Box>

      {/*src/components/HomeTopBanner.jsx */}
      <HomeTopBanner />

      {/*button frontend */}
      <Container maxWidth="lg">
        <Box sx={{ mt: "3rem" }}>
          <Button variant="contained" onClick={() => setShow(true)}>
            List All Bookings
          </Button>
        </Box>
      </Container>
      <RestaurantModal show={show} handleClose={() => setShow(false)} />
    </>
  );
}

export default App;

import { useState } from "react";
import HomeTopBanner from "../components/HomeTopBanner";
import RestaurantModal from "../components/RestaurantModal";
import Reservations from "../components/Reservations";
import { reservations } from "../temp-database/reservation";

export default function HomePage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <HomeTopBanner setShow={() => setShow(true)} />;
      <RestaurantModal show={show} handleClose={() => setShow(false)} />
      <Reservations />
    </>
  );
}

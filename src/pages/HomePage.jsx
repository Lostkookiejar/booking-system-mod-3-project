import { useState } from "react";
import HomeTopBanner from "../components/HomeTopBanner";
import RestaurantModal from "../components/RestaurantModal";
import Reservations from "../components/Reservations";

export default function HomePage() {
  const [show, setShow] = useState(null);
  return (
    <>
      <HomeTopBanner setShow={() => setShow("new")} />;
      <RestaurantModal show={show} handleClose={() => setShow(null)} />
      <Reservations setShow={() => setShow("edit")} />
    </>
  );
}

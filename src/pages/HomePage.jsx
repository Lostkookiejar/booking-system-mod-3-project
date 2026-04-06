import { useState } from "react";
import HomeTopBanner from "../components/HomeTopBanner";
import RestaurantModal from "../components/RestaurantModal";

export default function HomePage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <HomeTopBanner setShow={() => setShow(true)} />;
      <RestaurantModal show={show} handleClose={() => setShow(false)} />
    </>
  );
}

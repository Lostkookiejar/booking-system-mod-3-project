import { useEffect, useState } from "react";
import HomeTopBanner from "../components/HomeTopBanner";
import RestaurantModal from "../components/RestaurantModal";
import Reservations from "../components/Reservations";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [show, setShow] = useState(null);
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    setAuthToken("");
  };

  return (
    <>
      <HomeTopBanner setShow={() => setShow("new")} />
      <RestaurantModal show={show} handleClose={() => setShow(null)} />
      <Reservations
        handleLogout={handleLogout}
        setShow={() => setShow("edit")}
        handleClose={() => setShow(null)}
      />
    </>
  );
}

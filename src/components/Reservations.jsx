import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import ReservationCard from "./ReservationCard";

export default function Reservations({ handleLogout }) {
  const [rsrvs, setRsrvs] = useState([]);

  const fetchPosts = (userId) => {
    fetch(`http://localhost:3000/reservs/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setRsrvs(data))
      .catch((error) => console.error("Error: ", error));
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      fetchPosts(userId);
    }
  }, []);

  return (
    <Container>
      {rsrvs.length > 0 && (
        <>
          <h1 className="mb-3">
            <strong>Reservations</strong>
          </h1>
          {rsrvs.map((rsrv) => (
            <ReservationCard ele={rsrv} />
          ))}
        </>
      )}
      <Button onClick={handleLogout} className="rounded-pill" variant="warning">
        Log Out
      </Button>
    </Container>
  );
}

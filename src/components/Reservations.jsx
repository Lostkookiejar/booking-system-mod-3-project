import { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import ReservationCard from "./ReservationCard";
import { url } from "../../url";
export default function Reservations({ handleLogout, setShow, handleClose }) {
  const [rsrvs, setRsrvs] = useState([]);

  const fetchPosts = (userId) => {
    fetch(`${url}/reservs/user/${userId}`)
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
            <ReservationCard
              ele={rsrv}
              setShow={setShow}
              handleClose={handleClose}
            />
          ))}
        </>
      )}

      <Button
        onClick={handleLogout}
        className="rounded-pill mt-4"
        variant="warning"
      >
        Log Out
      </Button>
    </Container>
  );
}

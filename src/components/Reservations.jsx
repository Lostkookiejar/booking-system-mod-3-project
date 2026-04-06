import { Container } from "react-bootstrap";

export default function Reservations() {
  const timeString = new Date().toString();
  return (
    <Container>
      <h1>Reservations</h1>
      {/*
      Make sure you understand how to use Date class 
      Create a reservation
      */}

      <h1>{timeString}</h1>
    </Container>
  );
}

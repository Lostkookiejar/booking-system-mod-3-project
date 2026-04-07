import { Button, Card, Container } from "react-bootstrap";
import { bannerStyle, footerStyle } from "./style";

export default function HomeTopBanner({ setShow }) {
  return (
    <>
      <Card style={{ height: "auto" }} className={bannerStyle}>
        <Card.Body>
          <Card.Header
            style={{ fontSize: "5rem" }}
            className="text-light fw-bold"
            as="h1"
          >
            Chong's Restaurant Booking System
          </Card.Header>

          <Container className="d-grid gap-2">
            <Button
              onClick={setShow}
              size="lg"
              style={{ borderRadius: 50 }}
              className={footerStyle}
              variant="danger"
            >
              Create a Reservation
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

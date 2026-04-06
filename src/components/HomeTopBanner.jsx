import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
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

          <Card.Text>
            <Container className="mt-5">
              <Row>
                <Col className="d-flex" xs={9}>
                  <FormControl
                    className="align-self-center"
                    type="text"
                    placeholder="Where are we eating?"
                  />
                </Col>
                <Col className="d-grid gap-2" xs={3}>
                  <Button
                    onClick={setShow}
                    style={{ borderRadius: 50 }}
                    variant="warning"
                  >
                    Make a Reservation
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Text>

          <Container className="d-grid gap-2">
            <Button
              onClick={setShow}
              size="lg"
              style={{ borderRadius: 50 }}
              className={footerStyle}
              variant="danger"
            >
              Registering a Restaurant?
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

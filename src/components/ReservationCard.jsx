import { Button, Card, Col, Row } from "react-bootstrap";

export default function ReservationCard({ ele }) {
  return (
    <Card className="mb-4 p-2" key={ele.created_at}>
      <Card.Header className="bg-info">
        <h3 className="my-0 py-0">
          <strong>{ele.name}</strong>
        </h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Description: </strong>
          {ele.description}
        </Card.Text>
        <Row>
          <Col md={4}>
            <strong>Time: </strong>
            {ele.date.slice(0, 24)}
          </Col>
          <Col md={4}>
            <strong>Phone: </strong>
            {ele.phone}
          </Col>
          <Col md={4}>
            <strong>Email: </strong>
            {ele.email}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="d-flex flex-row justify-content-end align-items-end">
        <Button className="mx-1 px-4">
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Button className="mx-1 px-4" variant="danger">
          <i class="bi bi-x-circle-fill"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
}

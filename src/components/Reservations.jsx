import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ReservContext } from "../contexts/ReservContext";

export default function Reservations({ setShow }) {
  const { reservs, setReservs, staged, setStaged } = useContext(ReservContext);

  const handleEdit = (stagedId) => {
    setStaged(reservs.filter((ele) => ele.id === stagedId));
    setShow();
    console.log(staged);
  };

  const handleDelete = (stagedId) => {
    const updatedReservs = reservs.filter((ele) => ele.id !== stagedId);
    setReservs(updatedReservs);
  };

  return (
    <Container>
      {reservs[0] && (
        <>
          <h1 className="mb-3">
            <strong>Reservations</strong>
          </h1>
          {reservs.map((ele) => (
            <Card className="mb-4 p-2" key={ele.id}>
              <Card.Header className="bg-info">
                <h3 className="my-0 py-0">
                  <strong>{ele.name}</strong>
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>Description: </strong>
                  {ele.desc}
                </Card.Text>
                <Row>
                  <Col md={3}>
                    <strong>Time: </strong>
                    {ele.date.slice(0, 24)}
                  </Col>
                  <Col md={3}>
                    <strong>Phone: </strong>
                    {ele.phone}
                  </Col>
                  <Col md={3}>
                    <strong>Email: </strong>
                    {ele.email}
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="d-flex flex-row justify-content-end align-items-end">
                <Button
                  className="mx-1 px-4"
                  onClick={() => handleEdit(ele.id)}
                >
                  <i class="bi bi-pencil-square"></i>
                </Button>
                <Button
                  className="mx-1 px-4"
                  variant="danger"
                  onClick={() => handleDelete(ele.id)}
                >
                  <i class="bi bi-x-circle-fill"></i>
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

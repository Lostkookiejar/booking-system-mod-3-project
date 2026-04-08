import { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ReservContext } from "../contexts/ReservContext";
import axios from "axios";
import { url } from "../../url";
export default function ReservationCard({ ele, setShow, handleClose }) {
  const { setStaged } = useContext(ReservContext);
  const handleEdit = (created_at) => {
    setStaged(created_at);
    setShow();
  };

  const handleDelete = async (created_at) => {
    console.log(created_at);
    await axios
      .delete(`${url}/reservs/${created_at}`)
      .then((response) => {
        console.log(response);
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <Button
          className="mx-1 px-4"
          onClick={() => handleEdit(ele.created_at)}
        >
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Button
          className="mx-1 px-4"
          variant="danger"
          onClick={() => handleDelete(ele.created_at)}
        >
          <i class="bi bi-x-circle-fill"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
}

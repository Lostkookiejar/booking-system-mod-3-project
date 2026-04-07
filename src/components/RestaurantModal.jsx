import { useContext, useState } from "react";
import { getDay, setHours, setMinutes } from "date-fns";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { ReservContext } from "../contexts/ReservContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
export default function RestaurantModal({ show, handleClose }) {
  const [reservs, setReservs] = useState([]);
  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const url = "http://localhost:3000";

  const isWeekday = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const day = getDay(date);
    return day !== 0 && day !== 6 && currentDate <= selectedDate;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const clearFormControl = () => {
    setUserName("");
    setUserDesc("");
    setStartDate(null);
    setUserPhone("");
    setUserEmail("");
  };

  const newReserv = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const data = [
        {
          created_at: Date.now(),
          name: userName,
          description: userDesc,
          date: startDate.toString(),
          phone: userPhone,
          email: userEmail,
          user_id: userId,
        },
      ];
      axios
        .post(`${url}/reservs`, data[0])
        .then((response) => {
          console.log("Success: ", response.data);
          handleClose();
          clearFormControl();
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  const editReserv = () => {
    const updatedReservs = reservs.map((ele) => {
      if (ele.created_at === staged[0].created_at) {
        return {
          created_at: ele.created_at,
          name: userName,
          description: userDesc,
          date: startDate.toString(),
          phone: userPhone,
          email: userEmail,
        };
      }
    });
    setReservs(updatedReservs);
    handleClose();
    clearFormControl();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    show === "new" ? newReserv() : editReserv();
  };

  return (
    <Modal centered animation={false} show={show !== null} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          {show === "new" ? <h3>New</h3> : <h3>Edit</h3>}
        </Modal.Header>
        <Modal.Body className="d-grid gap-2">
          <FormControl
            required
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FormControl
            required
            type="text"
            placeholder="Description"
            value={userDesc}
            onChange={(e) => setUserDesc(e.target.value)}
          />
          <DatePicker
            required
            showIcon
            selected={startDate}
            filterDate={isWeekday}
            filterTime={filterPassedTime}
            minTime={setHours(setMinutes(new Date(), 30), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 23)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            onChange={(date) => setStartDate(date)}
          />
          <FormControl
            required
            type="text"
            placeholder="Phone Number"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
          <FormControl
            required
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Set Reservation
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

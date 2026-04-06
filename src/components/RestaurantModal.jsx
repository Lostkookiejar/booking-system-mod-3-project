import { useContext, useState } from "react";
import { getDay, setHours, setMinutes } from "date-fns";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { ReservContext } from "../contexts/ReservContext";
export default function RestaurantModal({ show, handleClose }) {
  const { reservs, setReservs, staged } = useContext(ReservContext);
  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");

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

  const newReserv = () => {
    setReservs([
      ...reservs,
      {
        id: Date.now(),
        name: userName,
        desc: userDesc,
        date: startDate.toString(),
        phone: userPhone,
        email: userEmail,
      },
    ]);
    handleClose();
    clearFormControl();
  };

  const editReserv = () => {
    const updatedReservs = reservs.map((ele) => {
      if (ele.id === staged[0].id) {
        return {
          id: ele.id,
          name: userName,
          desc: userDesc,
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

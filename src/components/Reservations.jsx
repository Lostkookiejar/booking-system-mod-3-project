import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default function Reservations() {
  const reservations = [
    {
      name: "Oakstreet Italian",
      date: "April 17",
      time: "16:00",
      optional: false,
      order: false,
    },
    {
      name: "Jezebel Pub",
      date: "April 16",
      time: "12:00",
      optional: {
        optionalValet: true,
        optionalParkingReserve: false,
      },
      order: {
        frenchFries: 1,
        chickenRice: 1,
        buboCake: 1,
      },
    },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    setDateString(startDate.toString().slice(0, 15));
  }, [startDate]);

  return (
    <Container>
      <h1>Reservations</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
      <h3>{dateString}</h3>
    </Container>
  );
}

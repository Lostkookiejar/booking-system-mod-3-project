import { useLocalStorage } from "@uidotdev/usehooks";
import { ReservContext } from "./contexts/ReservContext";

import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [reservs, setReservs] = useLocalStorage("reservations", []);
  const [staged, setStaged] = useState([]);
  return (
    <ReservContext.Provider value={{ reservs, setReservs, staged, setStaged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ReservContext.Provider>
  );
}

export default App;

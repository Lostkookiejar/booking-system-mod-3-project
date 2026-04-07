import { useLocalStorage } from "@uidotdev/usehooks";
import { ReservContext } from "./contexts/ReservContext";

import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  const [reservs, setReservs] = useLocalStorage("reservations", []);
  const [staged, setStaged] = useState([]);
  return (
    <Provider store={store}>
      <ReservContext.Provider
        value={{ reservs, setReservs, staged, setStaged }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ReservContext.Provider>
    </Provider>
  );
}

export default App;

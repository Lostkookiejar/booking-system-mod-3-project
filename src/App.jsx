import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import { ReservContext } from "./contexts/ReservContext";
import { useState } from "react";

function App() {
  const [staged, setStaged] = useState(null);
  return (
    <ReservContext.Provider value={{ staged, setStaged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ReservContext.Provider>
  );
}

export default App;

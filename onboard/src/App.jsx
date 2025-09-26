import React, { useState } from "react";
import Navbar from "./Navbar";
import Livret from "./Livret";
import Trombi from "./Trombi";

function App() {
  const [page, setPage] = useState("home"); // page active

  return (
    <div>
      <Navbar onNavigate={setPage} /> {/* on passe une fonction */}
      
      {page === "home" && <h1>Bienvenue sur mon site 🏠</h1>}
      {page === "livret" && <Livret />}
      {page === "trombi" && <Trombi />}
    </div>
  );
}

export default App;

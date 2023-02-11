import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import CookingStepsList from "./components/CookingStepsList/CookingStepsList";

function App() {
  return (
    <div>
      <CookingStepsList />
      <footer>
        <a href="https://www.freepik.com/free-vector/cooking-isometric-icons-collection_4358859.htm">
          Images by macrovector
        </a>{" "}
        on Freepik
      </footer>
    </div>
  );
}

export default App;

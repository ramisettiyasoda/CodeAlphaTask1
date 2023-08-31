import React from "react";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form3 from "./components/Form3";
import "./index.css";

const App =() => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Form />} />
    </Routes>
    </div>
  );
};


export default App;

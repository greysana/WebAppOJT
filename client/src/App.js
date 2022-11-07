import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";

function App() {
  return (
    <AppCon className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </AppCon>
  );
}

const AppCon = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export default App;
 
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;


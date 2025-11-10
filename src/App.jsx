import { Routes, Route } from 'react-router-dom';
// Garante que a importação do Cadastro esteja correta
import Cadastro from './pages/cadastro.jsx'; 
import './App.css'; 

// Componente de Login Simples para Testar a Rota
const Login = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#1c1c1c', color: 'white', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Página de Login</h1>
      <p>O roteamento está funcionando!</p>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} /> 
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
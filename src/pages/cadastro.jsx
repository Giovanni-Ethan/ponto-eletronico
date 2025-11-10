import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css'; 



// Ícone de Olho (visibilidade de senha)
const EyeIcon = ({ onClick, isVisible }) => (
    <div 
        onClick={onClick} 
        className="toggle-password-icon"
        title={isVisible ? "Ocultar Senha" : "Mostrar Senha"}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={isVisible ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.986 9.986 0 011.564-3.578m7.054 7.054c-.672.193-1.396.292-2.125.292a4.5 4.5 0 01-4.5-4.5c0-.729.099-1.453.292-2.125m1.065-1.065c-2.434-2.434-5.659-3.856-9.043-3.856-4.478 0-8.268 2.943-9.543 7a9.986 9.986 0 011.564-3.578m7.054 7.054c-.672.193-1.396.292-2.125.292a4.5 4.5 0 01-4.5-4.5c0-.729.099-1.453.292-2.125m1.065-1.065c-2.434-2.434-5.659-3.856-9.043-3.856-4.478 0-8.268 2.943-9.543 7a9.986 9.986 0 011.564-3.578" : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.045 8.08 4 12 4s8.268 3.045 9.542 8c-1.274 4.955-5.622 8-9.542 8s-8.268-3.045-9.542-8z"} />
        </svg>
    </div>
);

// Ícone de Retorno/Voltar
const ReturnIcon = ({ onClick }) => (
    <button onClick={onClick} className="return-button" title="Voltar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l-4-4m0 0l4-4m-4 4h12" />
        </svg>
    </button>
);


const Cadastro = () => {
    const navigate = useNavigate(); 
    
    // 1. Estados para Armazenar os Dados do Formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    // 2. Lógica de Submissão do Formulário (Front-end Puro)
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (senha !== confirmarSenha) {
            console.error("Erro: As senhas não coincidem.");
            return;
        }

        console.log('Formulário Submetido (Frontend Puro):');
        console.log({ nome, email, cargo, senha });
        
        // Simulação de sucesso e navegação
        console.log("Cadastro simulado com sucesso! Redirecionando para /login.");
        navigate('/login'); 
    };

    // 3. Função para Alternar a Visibilidade da Senha
    const toggleMostrarSenha = () => {
        setMostrarSenha(prev => !prev);
    };

    // 4. Função para Voltar (usando o router)
    const handleReturn = () => {
        navigate(-1); // Volta para a página anterior
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/login'); // Navega para a página de login
    }

    return (
        <div className="cadastro-page-container">
            {/* CABEÇALHO AMARELO E PRETO */}
            <header className="cpe-header">
                {/* Logo (Lâmpada e Texto CPE) */}
                <div className="logo-cpe">
                    <span className="logo-icon">💡</span>
                    <span className="logo-text">cpe</span>
                </div>
                {/* Ícone de Voltar (Visível apenas em Mobile) */}
                <ReturnIcon onClick={handleReturn} />
            </header>

            {/* CONTEÚDO PRINCIPAL (FUNDO PRETO) */}
            <main className="cadastro-main-content">
                
                {/* TÍTULO */}
                <h1 className="cadastro-title">CADASTRO</h1>

                {/* FORMULÁRIO */}
                <form className="cadastro-form" onSubmit={handleSubmit}>
                    
                    {/* Input: Nome */}
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        className="form-input"
                    />

                    {/* Input: E-mail */}
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />

                    {/* Input: Cargo */}
                    <input 
                        type="text" 
                        placeholder="Cargo" 
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        required
                        className="form-input"
                    />

                    {/* Input: Senha (com ícone de Olho) */}
                    <div className="input-group">
                        <input 
                            type={mostrarSenha ? "text" : "password"} 
                            placeholder="Senha" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="form-input input-with-icon"
                        />
                        <EyeIcon 
                            onClick={toggleMostrarSenha} 
                            isVisible={mostrarSenha}
                        />
                    </div>

                    {/* Input: Repita a Senha */}
                    <input 
                        type="password" 
                        placeholder="Repita sua senha" 
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                        className="form-input"
                    />
                    
                    {/* Link para Login */}
                    <p className="login-prompt">
                        Já tem uma conta? <a href="#" onClick={handleLoginClick}>Faça o login aqui.</a>
                    </p>

                    {/* Botão Principal */}
                    <button type="submit" className="cpe-button-primary">
                        CRIAR CONTA
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Cadastro;
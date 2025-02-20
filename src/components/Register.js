import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    especialidade: "",
  });

  const [mensagem, setMensagem] = useState("");

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para enviar os dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem(""); // Resetar mensagem ao enviar

    const response = await fetch("http://127.0.0.1:5000/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setMensagem("Usuário cadastrado com sucesso!");
      setFormData({ nome: "", cpf: "", email: "", telefone: "", especialidade: "" });
    } else {
      setMensagem("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Usuários</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input type="text" name="nome" className="form-control" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF:</label>
          <input type="text" name="cpf" className="form-control" value={formData.cpf} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail:</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone:</label>
          <input type="text" name="telefone" className="form-control" value={formData.telefone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Especialidade (Opcional):</label>
          <input type="text" name="especialidade" className="form-control" value={formData.especialidade} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
      {mensagem && <p className="mt-3 alert alert-info">{mensagem}</p>}
    </div>
  );
};

export default CadastroUsuario;
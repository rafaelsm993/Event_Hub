"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Head from "next/head";
import "./styles.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    documento: "",
  });
  const router = useRouter();
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "documento") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 14);
      setFormData((prev) => ({ ...prev, documento: onlyNumbers }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const { confirmarSenha, ...dataToSend } = formData;

      const response = await fetch("http://localhost:3001/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) throw new Error("Cadastro falhou");

      const result = await response.json();
      console.log("Usuário cadastrado:", result);
      localStorage.setItem("usuario", JSON.stringify(result));

      login();
      router.push("/");
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Erro ao realizar cadastro");
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="background">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Cadastro</h3>

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="confirmarSenha">Confirme sua Senha</label>
        <input
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="documento">Documento</label>
        <input
          type="text"
          id="documento"
          name="documento"
          placeholder="Enter CPF or CNPJ"
          value={formData.documento}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

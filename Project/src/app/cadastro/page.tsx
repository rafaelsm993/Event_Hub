"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import "./styles.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    tipo: "Pessoa Física",
    cpf: "",
    cnpj: "",
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 11);
      setFormData((prev) => ({ ...prev, cpf: onlyNumbers }));
    } else if (name === "cnpj") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 14);
      setFormData((prev) => ({ ...prev, cnpj: onlyNumbers }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const toggleTipo = () => {
    setFormData((prev) => ({
      ...prev,
      tipo: prev.tipo === "Pessoa Física" ? "Pessoa Jurídica" : "Pessoa Física",
    }));
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

      alert("Cadastro realizado com sucesso!");
      router.push("/login");
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

        <h4
          onClick={toggleTipo}
          style={{
            cursor: "pointer",
            //textDecoration: "underline",
            color: "#ffffff",
            marginBottom: "0px",
          }}
        >
          {formData.tipo}
        </h4>

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

        {formData.tipo === "Pessoa Física" && (
          <>
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        {formData.tipo === "Pessoa Jurídica" && (
          <>
            <label htmlFor="cnpj">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

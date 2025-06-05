"use client";
import { useState } from "react";
import Head from "next/head";
import { useAuth } from "../context/AuthContext"; // Adjust the path as necessary
import "./styles.css";

export default function SignUp() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Login failed");

      const result = await response.json();
      console.log("Usuário autenticado:", result);

      localStorage.setItem("usuario", JSON.stringify(result));

      login();

      window.location.href = "/";
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  const handleRedirectToRegister = () => {
      window.location.href = "/cadastro";
  };

  return (
    <>
      <Head>
        <title>Glassmorphism Login Form</title>
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
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          placeholder="******"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Log In</button>

        <p style={{ marginTop: "1rem" }}>
          Ainda não possui conta?{" "}
          <span
            style={{
              color: "White",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={handleRedirectToRegister}
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </>
  );
}

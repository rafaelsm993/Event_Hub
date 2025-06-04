"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import "./styles.css";

export default function CriarEvento() {
  const [formData, setFormData] = useState({
    titulo: "",
    data: "",
    local: "",
    descricao: "",
  });
  const [imagem, setImagem] = useState<File | null>(null);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("titulo", formData.titulo);
      form.append("data", formData.data);
      form.append("local", formData.local);
      form.append("descricao", formData.descricao);
      if (imagem) {
        form.append("imagem", imagem);
      }

      const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
      form.append("id_organizador", usuario.id);

      const response = await fetch("http://localhost:3001/api/Criar_evento", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Falha ao criar evento");

      const result = await response.json();
      console.log("Evento criado:", result);

      alert("Evento criado com sucesso!");
      router.push("/eventos");
    } catch (error) {
      alert("Erro ao criar evento");
    }
  };

  return (
    <>
      <Head>
        <title>Criar Evento</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>Criar Evento</h3>

        <label htmlFor="nome">Nome do Evento</label>
        <input
          type="text"
          id="nome"
          name="titulo"
          placeholder="Digite o nome do evento"
          value={formData.titulo}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="data">Data</label>
        <input
          type="date"
          id="data"
          name="data"
          value={formData.data}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="local">Local</label>
        <input
          type="text"
          id="local"
          name="local"
          placeholder="Digite o local"
          value={formData.local}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          placeholder="Descreva o evento"
          value={formData.descricao}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="imagem">Imagem do Evento</label>
        <input
          type="file"
          id="imagem"
          name="imagem"
          accept="image/*"
          onChange={handleFileChange}
        />

        <button type="submit">Criar Evento</button>
      </form>
    </>
  );
}

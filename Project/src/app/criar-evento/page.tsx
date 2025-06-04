"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

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

      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          min-height: 100vh;
          background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);
          overflow: hidden;
        }

        .background {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(to bottom, #000033, #000000);
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }

        .stars {
          width: 1px;
          height: 1px;
          position: absolute;
          background: white;
          box-shadow: 2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,
            22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,
            38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,
            53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white,
            68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white,
            83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white;
          animation: twinkle 8s infinite linear;
        }

        .shooting-star {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          animation: shoot 3s infinite ease-in;
        }

        .shooting-star:nth-child(2) {
          top: 20%;
          left: -100px;
          animation-delay: 0s;
        }
        .shooting-star:nth-child(3) {
          top: 35%;
          left: -100px;
          animation-delay: 1s;
        }
        .shooting-star:nth-child(4) {
          top: 50%;
          left: -100px;
          animation-delay: 2s;
        }
        .shooting-star:nth-child(5) {
          top: 65%;
          left: -100px;
          animation-delay: 3s;
        }
        .shooting-star:nth-child(6) {
          top: 80%;
          left: -100px;
          animation-delay: 4s;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(25deg);
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(50vh) rotate(25deg);
            opacity: 0;
          }
        }

        form {
          width: 400px;
          background-color: rgba(255, 255, 255, 0.13);
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          padding: 50px 35px;
          color: #ffffff;
        }

        form h3 {
          font-size: 32px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-top: 20px;
          font-size: 16px;
        }

        input,
        textarea {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.07);
          border-radius: 3px;
          padding: 10px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
          border: none;
          resize: none;
        }

        input[type="file"] {
          color: #e5e5e5;
          padding: 5px;
        }

        textarea {
          height: 80px;
        }

        ::placeholder {
          color: #e5e5e5;
        }

        button {
          margin-top: 30px;
          width: 100%;
          background-color: #0b0b2b;
          color: #ffffff;
          padding: 15px 0;
          font-size: 18px;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #1e3a8a;
        }
      `}</style>
    </>
  );
}

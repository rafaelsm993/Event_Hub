"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Eventos {
  id_evento: number;
  titulo: string;
  descricao: string | null;
  data: string | null;
  local: string | null;
  id_organizador: number | null;
}

export default function EventoDetalhes() {
  const [evento, setEvento] = useState<Eventos | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/eventos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Evento não encontrado");
        }
        return response.json();
      })
      .then((data) => {
        setEvento(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar evento:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <>
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando evento...</p>
        </div>
        <Footer />
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="error-container">
          <h2>Erro</h2>
          <p>{error}</p>
          <a href="/" className="btn">
            Voltar para a página inicial
          </a>
        </div>
        <Footer />
      </>
    );

  if (!evento)
    return (
      <>
        <Navbar />
        <div className="not-found-container">
          <h2>Evento não encontrado</h2>
          <p>O evento solicitado não foi encontrado em nosso sistema.</p>
          <a href="/" className="btn">
            Voltar para a página inicial
          </a>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="details">
          <h1>{evento.titulo}</h1>

          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Data:</span>
              <span className="info-value">
                {evento.data
                  ? new Date(evento.data).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Não informada"}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Local:</span>
              <span className="info-value">
                {evento.local || "Não informado"}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Organizador:</span>
              <span className="info-value">
                {evento.id_organizador
                  ? `ID ${evento.id_organizador}`
                  : "Não informado"}
              </span>
            </div>
          </div>

          <div className="description">
            <h3>Descrição</h3>
            <p>{evento.descricao || "Nenhuma descrição disponível."}</p>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary">Comprar Ingresso</button>
            <a href="/" className="btn btn-secondary">
              Voltar
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

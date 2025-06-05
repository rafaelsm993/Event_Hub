"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./style.css"; 

interface Evento {
  id_evento: number;
  titulo: string;
  descricao: string;
  data: string;
  local: string;
  foto: string | null;
  id_organizador: number;
}

export default function Page() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const searchParams = useSearchParams();
  const nome = searchParams.get("name");

  useEffect(() => {
    let url = "http://localhost:3001/eventos";
    if (nome) {
      url += `?name=${encodeURIComponent(nome)}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEventos(data);
        } else {
          console.error("Unexpected response format:", data);
          setEventos([]);
        }
      })
      .catch((error) => console.error("Erro ao buscar eventos:", error));
  }, [nome]);

  return (
    <>
      <Navbar />
      
      <div className="shell">
        <div className="container">
          <div className="row">
            {/* Render dynamically fetched event cards */}
            {eventos.map((evento) => (
            <div key={evento.id_evento} className="col-md-4">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img  src='https://t3.ftcdn.net/jpg/02/87/35/70/360_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg'
                  alt={evento.titulo} className="img-responsive" />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>{evento.local}</span>
                  </div>
                  <div className="title-product">
                    <h3>{evento.titulo}</h3>
                  </div>
                  <div className="description-prod">
                    <p>{evento.descricao}</p>
                  </div>
                  <div className="card-footer">
                    <div className="wcf-left"><span className="price">{new Date(evento.data).toLocaleDateString()}</span></div>
                    <div className="wcf-right"><button data-ico="￫">Inscrever-se</button></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
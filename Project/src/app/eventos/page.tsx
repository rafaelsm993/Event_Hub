import React from "react";
import "./style.css";

const EventPage: React.FC = () => {
  return (
    <div>
      {/* Banner do Evento */}
      <header className="banner">
        <h1>Kako e GW</h1>
        <p>a maior festa do ano!</p>
        {/* <button className="btn">Garanta seu ingresso</button> */}
      </header>

      {/* Informações do Evento */}
      <main className="container">
        <section className="details">
          <h2>📅 Data & Hora</h2>
          {/* imagem da festa */}
          <img src="https://static.wixstatic.com/media/dd6c50_7c65f9068ddf4608bcd89782bc93e40f~mv2.jpg/v1/fill/w_255,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FEED_SABADO.jpg" alt="Produto 2" />

          {/* horario da festa */}
          <h1>10 de Fevereiro, 2025 - 16h</h1>

          {/* local da festa */}
          <h2>📍 Local</h2>
          <p>Avenida Paulista, São Paulo - SP</p>


          {/* preco do evento */}
          <h2>🎟️ Ingressos</h2>
          <p>A partir de R$ 50,00</p>
          <button className="btn">Comprar Agora</button>
        </section>
      </main>
    </div>
  );
};

export default EventPage;

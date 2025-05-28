'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [nome, setNome] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = new URLSearchParams();
    if (nome) query.append('nome', nome);

    router.push(`/eventos?${query.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="row">
      <div className="col-md-12">
        <div className="model-search-content">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12">
              <div className="single-model-search">
                <h2>Nome do Evento</h2>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o nome do evento"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-12">
              <div className="single-model-search text-center">
                <button type="submit" className="welcome-btn model-search-btn">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

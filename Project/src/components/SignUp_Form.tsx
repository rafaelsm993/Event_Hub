'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  title?: string;
  content?: React.ReactNode;
  onClose?: () => void;
  closeOnOutsideClick?: boolean;
}

export default function Modal({
  title = "Event Form",
  content = <p className="text-lg text-gray-500">Please fill in the event details</p>,
  onClose,
  closeOnOutsideClick = true
}: ModalProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    data: '',
    local: '',
    id_organizador: '1' // Default value for demonstration; replace with dynamic value if needed
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    setIsVisible(false);

    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const event = {
      titulo: formData.titulo,
      descricao: formData.descricao,
      data: formData.data,
      local: formData.local,
      id_organizador: formData.id_organizador // Ensure this is included
    };

    try {
      const response = await fetch('http://localhost:3001/api/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      const result = await response.json();
      console.log('Event created:', result);
      handleClose();
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Erro ao criar evento. Veja o console para detalhes.');
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-[1000]"
      style={{
        position: 'absolute',
        zIndex: 2,
        top: '10%',
        right: '25%',
        background: 'white',
        width: '50%',
        borderRadius: '10px',
        padding: '50px'
      }}
      onClick={handleOutsideClick}
    >
      <div 
        className="relative mx-auto p-8 border w-96 shadow-lg rounded-md bg-white animate-fadeIn my-8"
        style={{height: '100%', width: '100%'}}    
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

          <form onSubmit={handleSubmit} className="space-y-4 w-full px-7 py-3">
            <div className="text-left">
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="local" className="block text-sm font-medium text-gray-700">Local</label>
              <input
                type="text"
                id="local"
                name="local"
                value={formData.local}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Register
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleClose();
                }}
                className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
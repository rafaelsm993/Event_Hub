'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  onClose?: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [isVisible, setIsVisible] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Login failed');

      const result = await response.json();
      console.log('Usuário autenticado:', result);
      handleClose();
    } catch (error) {
      alert('Erro ao fazer login');
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
      onClick={handleClose}
    >
      <div
        className="relative mx-auto p-8 border w-96 shadow-lg rounded-md bg-white animate-fadeIn my-8"
        style={{ height: '100%', width: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full px-7 py-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-center mt-8 space-x-4">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">
              Entrar
            </button>
            <button onClick={handleClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

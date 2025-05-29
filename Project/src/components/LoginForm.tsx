// components/LoginForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BaseModal from './BaseModal';

interface LoginModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LoginModal({ isVisible, onClose }: LoginModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', senha: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      onClose();
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <BaseModal isVisible={isVisible} onClose={onClose}>
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
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Entrar</button>
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancelar</button>
        </div>
      </form>
    </BaseModal>
  );
}

// components/SignUpForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BaseModal from './BaseModal';

interface SignUpFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SignUpForm({ isVisible, onClose }: SignUpFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    data: '',
    local: '',
    id_organizador: '1'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to create event');
      const result = await response.json();
      console.log('Event created:', result);
      onClose();
    } catch (error) {
      alert('Erro ao criar evento');
    }
  };

  return (
    <BaseModal isVisible={isVisible} onClose={onClose}>
      <h3 className="text-2xl font-bold text-gray-900 text-center">Cadastrar Evento</h3>
      <form onSubmit={handleSubmit} className="space-y-4 w-full px-7 py-3">
        <input type="text" name="titulo" placeholder="Título" value={formData.titulo} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        <input type="date" name="data" value={formData.data} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        <input type="text" name="local" placeholder="Local" value={formData.local} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        <div className="flex justify-center mt-8 space-x-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Cadastrar</button>
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Fechar</button>
        </div>
      </form>
    </BaseModal>
  );
}

// components/RegisterUserForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UsuarioService from '../service/usuarios';
import BaseModal from './BaseModal';

interface RegisterUserFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function RegisterUserForm({ isVisible, onClose }: RegisterUserFormProps) {
  const router = useRouter();
  const [isPessoaJuridica, setIsPessoaJuridica] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpfCnpj: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'cpfCnpj') {
      let numericValue = value.replace(/\D/g, '');
      numericValue = isPessoaJuridica ? numericValue.slice(0, 14) : numericValue.slice(0, 11);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePessoaTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPessoaJuridica(e.target.checked);
    setFormData(prev => ({ ...prev, cpfCnpj: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const usuarioService = new UsuarioService();
    const user = {
      nome: formData.name,
      email: formData.email,
      senha: formData.password,
      tipo: isPessoaJuridica ? 'Pessoa Jurídica' : 'Pessoa Física',
      cpf: isPessoaJuridica ? null : formData.cpfCnpj,
      cnpj: isPessoaJuridica ? formData.cpfCnpj : null,
      isCNPJ: isPessoaJuridica
    };

    try {
      const result = await new Promise((resolve, reject) => {
        usuarioService.create(user, (err, res) => {
          if (err) reject(err);
          else resolve(res);
        });
      });

      console.log('User created:', result);
      onClose();
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Erro ao criar usuário. Veja o console para detalhes.');
    }
  };

  return (
    <BaseModal isVisible={isVisible} onClose={onClose}>
      <h3 className="text-2xl font-bold text-gray-900 text-center">Cadastro de Usuário</h3>

      <div className="flex items-center justify-center my-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isPessoaJuridica}
            onChange={handlePessoaTypeChange}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900">
            {isPessoaJuridica ? 'Pessoa Jurídica' : 'Pessoa Física'}
          </span>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 w-full px-7 py-3">
        <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border rounded" />

        <div className="flex space-x-4">
          <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleInputChange} required className="w-1/2 p-2 border rounded" />
          <input type="password" name="confirmPassword" placeholder="Confirmar Senha" value={formData.confirmPassword} onChange={handleInputChange} required className="w-1/2 p-2 border rounded" />
        </div>

        <input
          type="text"
          name="cpfCnpj"
          placeholder={isPessoaJuridica ? 'CNPJ' : 'CPF'}
          value={formData.cpfCnpj}
          onChange={handleInputChange}
          maxLength={isPessoaJuridica ? 14 : 11}
          required
          className="w-full p-2 border rounded"
        />

        <div className="flex justify-center mt-8 space-x-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Registrar</button>
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Fechar</button>
        </div>
      </form>
    </BaseModal>
  );
}

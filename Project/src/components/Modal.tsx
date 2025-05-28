'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UsuarioService from '../service/usuarios'; // Ajuste o caminho conforme seu projeto

interface ModalProps {
  title?: string;
  content?: React.ReactNode;
  onClose?: () => void;
  closeOnOutsideClick?: boolean;
}

export default function Modal({
  title = "Registration Form",
  content = <p className="text-lg text-gray-500">Please fill in your details</p>,
  onClose,
  closeOnOutsideClick = true
}: ModalProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
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
      // Permite só números
      let numericValue = value.replace(/\D/g, '');

      // Limita tamanho (CPF = 11, CNPJ = 14)
      numericValue = isPessoaJuridica ? numericValue.slice(0, 14) : numericValue.slice(0, 11);

      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePessoaTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPessoaJuridica(e.target.checked);
    setFormData(prev => ({
      ...prev,
      cpfCnpj: ''
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

    if(formData.password !== formData.confirmPassword){
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
      handleClose();
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Erro ao criar usuário. Veja o console para detalhes.');
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
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {isPessoaJuridica ? 'Contact Name' : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>

            <div className="text-left">
              <label htmlFor="cpfCnpj" className="block text-sm font-medium text-gray-700">
                {isPessoaJuridica ? 'CNPJ' : 'CPF'}
              </label>
              <input
                type="text"
                id="cpfCnpj"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
                placeholder={isPessoaJuridica ? '00.000.000/0000-00' : '000.000.000-00'}
                maxLength={isPessoaJuridica ? 14 : 11}
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

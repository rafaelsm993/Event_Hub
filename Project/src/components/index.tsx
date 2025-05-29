// pages/index.tsx
'use client'
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import SignUpForm from '@/components/CriarEvento';
import RegisterUserForm from '@/components/Cadastro';

export default function HomePage() {
  const [modal, setModal] = useState<null | 'login' | 'signup' | 'register'>();

  return (
    <div className="p-8">
      <button onClick={() => setModal('login')} className="mr-4 px-4 py-2 bg-blue-600 text-white">Login</button>
      <button onClick={() => setModal('signup')} className="mr-4 px-4 py-2 bg-green-600 text-white">Evento</button>
      <button onClick={() => setModal('register')} className="px-4 py-2 bg-purple-600 text-white">Cadastro</button>

      <LoginForm isVisible={modal === 'login'} onClose={() => setModal(null)} />
      <SignUpForm isVisible={modal === 'signup'} onClose={() => setModal(null)} />
      <RegisterUserForm isVisible={modal === 'register'} onClose={() => setModal(null)} />
    </div>
  );
}

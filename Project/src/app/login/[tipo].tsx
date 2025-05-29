// pages/login/[tipo].tsx

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Importa o modal de login dinamicamente, desativando o SSR
const LoginModal = dynamic(() => import('../../components/LoginForm'), { ssr: false });

export default function LoginTipoPage() {
  const router = useRouter();
  const { tipo } = router.query; // Captura o parâmetro dinâmico da rota

  return (
    <div>
      <h1>Login para {tipo}</h1>
      <LoginModal />
    </div>
  );
}

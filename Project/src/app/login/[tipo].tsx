import dynamic from 'next/dynamic';

const LoginModal = dynamic(() => import('../../components/LoginForm'), { ssr: false });

export default function LoginTipoPage() {
  return <LoginModal />;
}

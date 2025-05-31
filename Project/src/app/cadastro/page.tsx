'use client';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const router = useRouter();

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

    // 👉 Salva o usuário no localStorage
    localStorage.setItem('usuario', JSON.stringify(result));

    // 👉 Redireciona após login
    router.push('/');
  } catch (error) {
    alert('Erro ao fazer login');
  }
};

  return (
    <>
      <Head>
        <title>Glassmorphism Login Form</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="background">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          placeholder="******"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Log In</button>
      </form>

      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh !important;
          background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f) !important;
          overflow: hidden !important;
        }

        .stars {
          width: 1px;
          height: 1px;
          position: absolute;
          background: white;
          box-shadow: 2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,
            22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,
            38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,
            53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white,
            68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white,
            83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white,
            98vw 35vh 2px white, 5vw 60vh 1px white, 12vw 65vh 2px white,
            18vw 72vh 1px white, 25vw 78vh 2px white, 30vw 85vh 1px white,
            35vw 68vh 2px white, 40vw 82vh 1px white, 45vw 92vh 2px white,
            50vw 75vh 1px white, 55vw 88vh 2px white, 60vw 95vh 1px white,
            65vw 72vh 2px white, 70vw 85vh 1px white, 75vw 78vh 2px white,
            80vw 92vh 1px white, 85vw 82vh 2px white, 90vw 88vh 1px white,
            95vw 75vh 2px white;
          animation: twinkle 8s infinite linear;
        }

        .shooting-star {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          animation: shoot 3s infinite ease-in;
        }

        .shooting-star:nth-child(1) {
          top: 20%;
          left: -100px;
          animation-delay: 0s;
        }

        .shooting-star:nth-child(2) {
          top: 35%;
          left: -100px;
          animation-delay: 1s;
        }

        .shooting-star:nth-child(3) {
          top: 50%;
          left: -100px;
          animation-delay: 2s;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(25deg);
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(50vh) rotate(25deg);
            opacity: 0;
          }
        }

        .stars::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          box-shadow: 8vw 12vh 2px white, 16vw 18vh 1px white, 24vw 25vh 2px white,
            33vw 15vh 1px white, 41vw 28vh 2px white, 49vw 35vh 1px white,
            57vw 22vh 2px white, 65vw 42vh 1px white, 73vw 28vh 2px white,
            81vw 48vh 1px white, 89vw 32vh 2px white, 97vw 45vh 1px white,
            3vw 68vh 2px white, 11vw 75vh 1px white, 19vw 82vh 2px white,
            27vw 88vh 1px white, 35vw 72vh 2px white, 43vw 85vh 1px white,
            51vw 92vh 2px white, 59vw 78vh 1px white;
          animation: twinkle 6s infinite linear reverse;
        }

        .background {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(to bottom, #000033, #000000);
          position: absolute;
          left: 0;
          top: 0;
        }

        .shape {
          height: 200px;
          width: 200px;
          position: absolute;
          border-radius: 50%;
        }

        .shape:first-child {
          background: linear-gradient(#0a0f2c, #1e3a8a);
          left: -80px;
          top: -80px;
        }

        .shape:last-child {
          background: linear-gradient(to right, #000000, #1e3a8a);
          right: -30px;
          bottom: -80px;
        }

        form {
          height: 520px;
          width: 400px;
          background-color: rgba(255, 255, 255, 0.13);
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          padding: 50px 35px;
          color: #ffffff;
        }

        form h3 {
          font-size: 32px;
          font-weight: 500;
          line-height: 42px;
          text-align: center;
          color: #ffffff;
        }

        label {
          display: block;
          margin-top: 30px;
          font-size: 16px;
          font-weight: 500;
        }

        input {
          display: block;
          height: 50px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.07);
          border-radius: 3px;
          padding: 0 10px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
        }

        ::placeholder {
          color: #e5e5e5;
        }

        button {
          margin-top: 50px;
          width: 100%;
          background-color: #0b0b2b;
          color: #ffffff;
          padding: 15px 0;
          font-size: 18px;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
        }

        .social {
          margin-top: 30px;
          display: flex;
        }

        .social div {
          width: 150px;
          border-radius: 3px;
          padding: 5px 10px 10px 5px;
          background-color: rgba(255, 255, 255, 0.27);
          color: #eaf0fb;
          text-align: center;
          cursor: pointer;
        }

        .social div:hover {
          background-color: rgba(255, 255, 255, 0.47);
        }

        .fb {
          margin-left: 25px;
        }

        .social i {
          margin-right: 4px;
        }
      `}</style>
    </>
  );
}

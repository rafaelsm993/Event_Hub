export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                senha: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const res = await fetch('http://localhost:3001/api/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: credentials.email,
                            senha: credentials.senha
                        })
                    });

                    const user = await res.json();

                    if (res.ok && user) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Erro ao autenticar:', error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/Cadastro' // Página de login personalizada // Página de erro personalizada
    },
    // Outras opções do NextAuth
});

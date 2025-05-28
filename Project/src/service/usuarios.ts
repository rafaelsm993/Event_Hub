interface Usuario {
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    cpf?: string | null;
    cnpj?: string | null;
    isCNPJ: boolean;
  }
  
  export default class UsuarioService {
    async create(usuario: Usuario, callback: (err: any, res: any) => void) {
      try {
        const response = await fetch('http://localhost:3001/api/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario)
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          return callback(errorData, null);
        }
  
        const data = await response.json();
        callback(null, data);
      } catch (error) {
        callback(error, null);
      }
    }
  }
  
import {supabase} from "../../config/supaBaseClient"
import bcrypt from 'bcryptjs';

async function checkPassword(inputPassword, storedHash) {
    return await bcrypt.compare(inputPassword, storedHash);
}

export const signIn = async (email,senha) => {

    try {
        const {user,error} = await supabase
            .from('usuario')
            .select('*')
            .eq('email',email)
            .single()

            if (error || !user) {
                console.error('Usuário não encontrado ou erro:', error?.message);
                return { success: false, message: 'Usuário não encontrado' };
              }
        const senhasMatches = await bcrypt.compare(senha, user.senha)
        if(!senhasMatches){
            console.error('Senha incorreta');
            return {success: false, message: 'Email ou senha incorreta'}
        }
        console.log("Usuario autenticado!" , user);
        return { success: true, data: user };
    } catch (err) {
      console.error('Erro inesperado durante o login:', err);
      return { success: false, message: 'Ocorreu um erro durante o login.' };
    }
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

export const useAuth = () =>{
    const user = supabase.auth.user()
    return { user }
}

export const fetchUser = async (email) => {
    try {
      const { data, error } = await supabase
        .from('usuario') // Nome correto da tabela
        .select('*')
        .eq('email', email);
  
      if (error) {
        console.error('Erro ao buscar usuário:', error.message);
        return null;
      }
      console.log(data);
      
      return data;
    } catch (err) {
      console.error('Erro inesperado:', err);
      return null;
    }
  };
  
  export const fetchAllData = async () => {
const fetchAllData = async () => {
    let { data: usuario, error } = await supabase
    .from('usuario')
    .select('*')
            

  if (error) {
    console.error('Erro ao buscar dados:', error.message);
    return null;
  }

  console.log('Dados da tabela:', data);
  return data;
};
  
    if (error) {
      console.error('Erro ao buscar dados:', error.message);
      return null;
    }
  
    console.log('Dados da tabela:', data);
    return data;
  };
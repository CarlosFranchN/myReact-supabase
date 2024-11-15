import supabase from "../../config/supaBaseClient"
import bcrypt from 'bcryptjs';

async function checkPassword(inputPassword, storedHash) {
    return await bcrypt.compare(inputPassword, storedHash);
}

export const signIn = async (email,password) => {
    try{const {user,error} = await supabase
        .from('usuario')
        .select('*')
        .eq('email',email)
        .single()
    if (error) {
        console.error('Error fetching user', error.message);
        return {success: false, message: 'User not found'}
        
    }
    const passwordMatches = await checkPassword(password, us)
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
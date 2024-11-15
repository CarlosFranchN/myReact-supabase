import supabase from "../../config/supaBaseClient"
import bcrypt from 'bcryptjs';


export const signIn = async (email,password) => {
    const {user,error} = await supabase
        .from('usuario')
        .select('*')
        .eq('email',email)
        .single()
    if (error) throw error
    return user
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

export const useAuth = () =>{
    const user = supabase.auth.user()
    return { user }
}
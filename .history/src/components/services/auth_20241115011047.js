import supabase from "../config/supaBaseClient"



export const signIn = async (email,password) => {
    const {user,error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
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
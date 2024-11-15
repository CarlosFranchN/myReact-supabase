import supabase from "../config/supaBaseClient"



export const signIn = async (email,password) => {
    const {user,error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error)
}
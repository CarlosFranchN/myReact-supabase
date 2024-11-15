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
    const passwordMatches = await checkPassword(password, user.password)
}
if (passwordMatches) {
    console.log('User authenticated:', user);
    window.location.replace('dashboard.html');
    return { success: true, data: user };
} else {
    console.error('Invalid password');
    return { success: false, message: 'Invalid password' };
}
} catch (err) {
console.error('Unexpected error:', err);
return { success: false, message: 'An unexpected error occurred' };
}
    

async function verifyUser(email, password) {
    try {
        // Query the users table to find the user by email
        const { data: user, error: userError } = await _supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (userError) {
            console.error('Error fetching user:', userError.message);
            return { success: false, message: 'User not found' };
        }

        // Check if the password matches (hash comparison in a real scenario)
        // Você precisa usar uma função de hash para garantir a segurança das senhas
        const passwordMatches = await checkPassword(password, user.password);
        
        if (passwordMatches) {
            console.log('User authenticated:', user);
            window.location.replace('dashboard.html');
            return { success: true, data: user };
        } else {
            console.error('Invalid password');
            return { success: false, message: 'Invalid password' };
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'An unexpected error occurred' };
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
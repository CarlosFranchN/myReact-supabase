import React from 'react'
import { useState,useEffect } from 'react'
import supabase from '../../config/supaBaseClient'

export const Create = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("Email: ",email);
    console.log("Password: ", password);
    if (!email || !password){
      console.log("Incompleto");
      return
    }
    const { data,error } = await supabase
      .from('Users')
      .insert([{email,password}])

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
}

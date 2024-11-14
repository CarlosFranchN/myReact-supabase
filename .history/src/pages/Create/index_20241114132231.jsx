import React from 'react'
import { useState,useEffect } from 'react'

export const Create = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div>Create</div>
  )
}

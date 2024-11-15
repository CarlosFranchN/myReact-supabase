import React from 'react'
import {Link, Outlet } from 'react-router-dom'


export const Au = () => {
  return (
    <div className="auth-layout">
      {/* Coloque o seu layout de login aqui */}
      <div className="auth-container">
        <h1>Bem-vindo! Faça o login</h1>
        <Outlet />  {/* Renderiza o componente Login */}
      </div>
    </div>
  )
}


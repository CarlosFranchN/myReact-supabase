import React from 'react'
import { LayoutCabecalho } from './style'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <nav>
            <LayoutCabecalho>
            <li>
                <Link to={"/"}>Início</Link>
                </li>
                <li>
                <Link to={"/sobre"}>Sobre</Link>
                </li>
                <li>
                <Link to={"/contato"}>Contato</Link>
                </li>
                <li>
                <Link to={"/cursos"}>Cursos</Link>
                </li>
            </LayoutCabecalho>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
    </>
  )
}

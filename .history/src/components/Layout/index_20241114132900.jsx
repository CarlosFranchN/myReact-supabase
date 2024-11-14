import React from 'react'
import { LayoutCabecalho } from './style'

export const Layout = () => {
  return (
    <>
        <nav></nav>
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
    </>
  )
}

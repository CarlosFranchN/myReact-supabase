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

                </li>
            </LayoutCabecalho>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>My Shit</p>
        </footer>
    </>
  )
}

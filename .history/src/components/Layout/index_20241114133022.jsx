import React from 'react'
import { LayoutCabecalho } from './style'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <nav>
            <LayoutCabecalho>
            <li>
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                <Link to={"/sobre"}>Sobre</Link>
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

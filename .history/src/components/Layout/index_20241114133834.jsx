import React from 'react'
import { LayoutCabecalho, LayoutFooter, LayoutFooterP } from './style'
import {Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <nav>
            <LayoutCabecalho>
            <li>
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                <Link to={"/create"}>Create</Link>
                </li>

                
            </LayoutCabecalho>
        </nav>
        <main>
            <Outlet />
        </main>
        <LayoutFooter>
            <LayoutFooterP
        </LayoutFooter>
    </>
  )
}

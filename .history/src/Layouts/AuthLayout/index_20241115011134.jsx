import React from 'react'
import {Link, Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <>
        <nav>
            <LayoutCabecalho>
                <li>
                <Link to={"/login"}>Login</Link>
                </li>

                
            </LayoutCabecalho>
        </nav>
        <LayoutMain>
            <Outlet/>
        </LayoutMain>
        <LayoutFooter>
            <LayoutFooterP>My shit</LayoutFooterP>
        </LayoutFooter>
    </>
  )
}


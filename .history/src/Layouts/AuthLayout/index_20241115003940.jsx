import React from 'react'
import { LayoutCabecalho, LayoutFooter, LayoutFooterP, LayoutMain } from './style'
import {Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

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


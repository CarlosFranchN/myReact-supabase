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
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                <Link to={"/create"}>Create</Link>
                </li>

                
            </LayoutCabecalho>
        </nav>
        <LayoutMain>
            <out
        </LayoutMain>
        <LayoutFooter>
            <LayoutFooterP>My shit</LayoutFooterP>
        </LayoutFooter>
    </>
  )
}


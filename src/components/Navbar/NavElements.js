import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaPizzaSlice } from 'react-icons/fa'


export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;

`
export const Text = styled.h2`
color: red;
`
export const NavLink = styled(Link)`
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    /* @media screen and (max-width: 480px){
        position: absolute;
        top: 10px;
        right: 25px;
    } */
    
`
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`
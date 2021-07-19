import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0ms.3 ease-in-out;
    right: 0;
    /* right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')}; */

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50px);
`
export const SidebarLink = styled(Link)`
    padding: 1rem;
    text-decoration: none;
    color: #e31837;
    transition: 0.5s ease-in-out;

    &:hover{
        background-color: #e31837;
        color: #fff;
        padding-left: 1.5rem;
    }
`

export const SidebarWrap = styled.div`
    margin: 1rem;
    justify-content: center;
    display: flex;
    
`

export const SidebarRoute = styled(Link)`
    background: #e31837;
    color: white;
    text-decoration: none;
    padding: 1rem 3rem;
    border-radius: 6px;
`
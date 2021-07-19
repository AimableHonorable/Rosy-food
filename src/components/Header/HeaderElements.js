import styled from "styled-components"

export const HeaderContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url("https://www.pizzahut.co.uk/restaurants/r/globalassets/1.-rebrand/1.-campaign/aggregators/deliveroo/new-p7-homepage-min.jpg");
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const HeaderContent = styled.div`
    color: white;
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`
export const HeaderItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`
export const HeaderH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px, 5px #e9ba23;
    letter-spacing: 5px;
`
export const HeaderP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 1rem;
`

export const HeaderButton = styled.button`
    font-size: 1.4rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
    
`
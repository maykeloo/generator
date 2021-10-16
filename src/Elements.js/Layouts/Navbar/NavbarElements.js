import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonsBar = styled.nav`
    width:90%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    
`

export const Linkbar = styled(Link)`
    width: 190px;
    height: 40px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    color: white;
    font-size: 27px;
    text-decoration: none;
    border: 2px solid white;
    transition: 0.2s;
    font-family: 'Coming Soon', sans-serif;
    box-shadow: -10px 10px 10px -4px rgba(0, 0, 0, 1);

    &:hover {
        transform: translate(10px, -10px);
        box-shadow: -14px 14px 0px -4px rgba(0, 0, 0, 1);
    }
`
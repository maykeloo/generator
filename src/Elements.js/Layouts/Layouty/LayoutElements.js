import styled from "styled-components";
import { BsFillQuestionCircleFill } from 'react-icons/bs'

export const Apps = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    transition: 0.4s;
    background: ${props => props.color ? props => props.color : '#00CAA6'};
    -webkit-box-shadow: 18px 13px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 18px 13px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 18px 13px 24px 0px rgba(66, 68, 90, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TitlePlace = styled.header`    
    width: 90%;
    margin-top: 20px;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    color: white;
    font-size: 3em;
    margin: 0;
    font-family: 'Coming Soon', sans-serif;
`

export const FaQ = styled(BsFillQuestionCircleFill)`
    font-size: 2em;
    color: white;
`



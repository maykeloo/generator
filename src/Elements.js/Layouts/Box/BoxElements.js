import styled from "styled-components";

export const Boxy = styled.div`
    width: 350px;
    height: 350px;
    transition: background;
    transition-duration: 0.4s;
    background: ${props => props.boxColor ? props => props.boxColor : '#00CAA6'};
    border-radius: ${props => props.left}px ${props => props.right}px ${props => props.top}px ${props => props.bottom}px 
`
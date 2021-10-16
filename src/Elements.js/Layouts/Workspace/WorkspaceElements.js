import styled from "styled-components";
import { MdContentCopy } from 'react-icons/md'


export const WorkstageContent = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 40px;
    
`

export const PropertiesTab = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    box-shadow: -13px 13px 10px -4px rgba(66, 68, 90, 1);
`

export const WorkTab = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;  
    border: 3px solid black;
    box-shadow: -13px 13px 10px -4px rgba(66, 68, 90, 1);
`

export const CommandContent = styled.div`
    width: 100%;
    height: 100px;
    background: black;
    border: 3px solid white;
    margin-top: 20px;
    box-shadow: -13px 13px 10px -4px rgba(66, 68, 90, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

export const RightWorkSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 100px;

`
export const CommandLine = styled.span`
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    margin-left: 40px;
    letter-spacing: 1px;
    padding: 3px;
`

export const CopyButton = styled.button`
    position: absolute;
    height: 60px;
    width: 60px;
    right: -25px;
    border: 3px solid transparent;
    box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border-radius: 30px;
        background: ${props => props.bgColor};
        border: 3px solid white;
    }
`

export const CopyIcon = styled(MdContentCopy)`
    display: block;
    height: 30px;
    width: 30px;

    &:hover {
        color: ${props => props.bgColor ? 'white' : 'black'};
    }
`
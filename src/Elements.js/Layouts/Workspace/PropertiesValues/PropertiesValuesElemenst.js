import styled from "styled-components";

export const PropertiesContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;  
    box-shadow: -13px 13px 10px -4px rgba(66, 68, 90, 1);
`

export const PropertiesTitle = styled.h2`
    display: block;
    width: 90%;
    font-weight: bold;
    font-size: 30px;
    font-family: 'Coming Soon', serif;
    position: relative;

`

export const Top = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
`

export const InputsBar = styled.div`   
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`


export const InputsTab = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Number = styled.div`
    height: 15px;
    width: 50px;
    border: 2px solid black;
    outline: none;
    display: flex;
    justify-content: center;
    padding: 3px 0;
    font-family: 'Josefin Sans'
`


export const InputBar = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProperieName = styled.span`
    font-weight: bold;
    font-size: 20px;
    font-family: 'Josefin Sans'
`

export const Range = styled.input.attrs(() => ({
    type: 'range',
    min: '0',
    max: '400',
    
}))`
    -webkit-appearance: none;
    background: transparent;
    display: flex;
    align-items: center;

    &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 3px solid black;
    background: white;
    width: 20px;
    height: 20px;
    transform: translateY(-7.5px);
    cursor: pointer;
    border-radius: 20px;
    }

    &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: #000;
    border-radius: 5px;
    }
`




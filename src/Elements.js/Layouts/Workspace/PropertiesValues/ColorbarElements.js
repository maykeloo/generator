import styled from "styled-components";

export const ColorBar = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`


export const ColorInBar = styled.div`
    width: 90%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ColorIn = styled.input.attrs(() => ({
    type: 'color',
}))`
    width: 100px;
`

export const ColorText = styled.span`
    font-size: 30px;
    font-weight: bold;
    font-family: "Josefin Sans", sans-serif;
`

export const Slider = styled.input.attrs(() => ({
    type: 'checkbox'
}))`

  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
`
import React from 'react'
import { Boxy } from './BoxElements'


const Box = (props) => {  
    return (
        <>
          <Boxy 
          left = {props.left}
          right = {props.right}
          top = {props.top}
          bottom = {props.bottom}
          boxColor = {props.boxColor}
          ></Boxy>  
        </>
    )
}

export default Box

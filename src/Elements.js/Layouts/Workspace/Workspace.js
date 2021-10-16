import React, {useState} from 'react'
import Box from '../Box/Box'
import PropertiesValues from './PropertiesValues/PropertiesValues'
import { CommandContent, CommandLine, CopyButton, CopyIcon, PropertiesTab, RightWorkSide, WorkstageContent, WorkTab } from './WorkspaceElements'
import { Route } from 'react-router'

export const Workspace = (props) => {

    const [left, setLeft] = useState(0);

    const borderLeft = e => {
        setLeft(e.target.value);
    }

    const [right, setRight] = useState(0);

    const borderRight = e => {
        setRight(e.target.value);
    }

    const [top, setTop] = useState(0);

    const borderTop = e => {
        setTop(e.target.value);
    }

    const [bottom, setBottom] = useState(0);

    const borderBottom = e => {
        setBottom(e.target.value);
    }




    return (
        <>
        <WorkstageContent>
        <Route path = '/Border'>
             <PropertiesTab >
                <PropertiesValues 
                right = {borderRight}
                left = {borderLeft}
                top = {borderTop}
                bottom = {borderBottom}
                valueLeft = {left}
                valueRight = {right}
                valueUp = {top}
                valueDown = {bottom}
                color ={props.color} 
                settingColor = {props.settingColor}
                setColor = {props.color}
                />
                
             </PropertiesTab>
        </Route>
        <Route path = '/Border'>
            <RightWorkSide>
             <WorkTab>
                 <Box 
                left = {left}
                right = {right}
                top = {top}
                bottom = {bottom}
                boxColor = {props.color.hex}
                 />
             </WorkTab>
                <CommandContent>
                    <CommandLine>-webkit-border-radius: {left}px {right}px {top}px {bottom}px </CommandLine>
                    <CommandLine>-moz-border-radius: {left}px {right}px {top}px {bottom}px </CommandLine>
                    <CommandLine>border-radius: {left}px {right}px {top}px {bottom}px </CommandLine>
                    <CopyButton bgColor = {props.color.hex} onClick={() => {navigator.clipboard.writeText(`border-radius: ${left}px ${right}px ${top}px ${bottom}px`)}}><CopyIcon bgColor = {props.color.hex}/></CopyButton>
                </CommandContent>
             </RightWorkSide>
             </Route>
        </WorkstageContent>   
        
        </>
    )
}

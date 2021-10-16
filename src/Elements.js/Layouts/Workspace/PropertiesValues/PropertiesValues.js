import React, {useState} from 'react'
import Colorbar from './Colorbar'
import { InputBar, InputsTab, Top, ProperieName, InputsBar, PropertiesContent, PropertiesTitle, Range, Number } from './PropertiesValuesElemenst'

const PropertiesValues = (props) => {



    return (
        <>
            <PropertiesContent >
                <PropertiesTitle>Border Radius</PropertiesTitle>
                <InputsTab>
                    <InputBar>
                        <Top>
                            <InputsBar>
                                <ProperieName >Top left</ProperieName> 
                                <Number>{props.valueLeft}</Number>
                            </InputsBar>
                        </Top>
                        <Range onChange = {props.left} dotColor = {props.dotColor}/>
                    </InputBar>

                    <InputBar>
                    <Top>
                            <InputsBar>
                                <ProperieName >Top right</ProperieName> 
                                <Number>{props.valueRight}</Number>
                            </InputsBar>
                        </Top>
                        <Range onChange = {props.right} dotColor = {props.dotColor}/>
                    </InputBar>

                    <InputBar>
                    <Top>
                            <InputsBar>
                                <ProperieName >Bottom right</ProperieName> 
                                <Number>{props.valueUp}</Number>
                            </InputsBar>
                        </Top>
                        <Range onChange = {props.top} dotColor = {props.dotColor}/>
                    </InputBar>

                    <InputBar>
                    <Top>
                            <InputsBar>
                                <ProperieName >Bottom right</ProperieName> 
                                <Number>{props.valueDown}</Number>
                            </InputsBar>
                        </Top>
                        <Range onChange = {props.bottom} dotColor = {props.dotColor}/>
                    </InputBar>
                    <Colorbar color ={props.color} settingColor = {props.settingColor}/>
                </InputsTab>
            </PropertiesContent>
        </>
    )
}

export default PropertiesValues

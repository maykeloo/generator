import React, {useState} from 'react'
import { Apps, ButtonsBar, Content, FaQ, Linkbar, Title, TitlePlace, WorkstageContent } from './LayoutElements'
import Navbar from '../Navbar/Navbar'
import { Workspace } from '../Workspace/Workspace'

const Layout = () => {


    const [color, setColor] = useState('#00CAA6');

    const settingColor = colorpicker => {
        setColor(colorpicker)
    }
    return (
        <>
            <Apps>
                <Content color = {color.hex}>
                    <TitlePlace>
                        <Title>
                            CSS Generator
                        </Title>
                        <FaQ/>
                    </TitlePlace>
                    <Navbar/>
                    <Workspace 
                    color = {color} 
                    settingColor = {settingColor}
                    setColor = {color}/>
                </Content>
            </Apps>
        </>
    )
}

export default Layout

import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonsBar, Linkbar } from './NavbarElements'

const Navbar = () => {

    const buttons = ['Shadow', 'Flexbox', 'Border', 'Gradient', 'Transition', 'Transform'];

    const eachButton = buttons.map(button => <Linkbar to = {button}>{button}</Linkbar>);

    return (
        <>
                    <ButtonsBar>
                        {eachButton}
                    </ButtonsBar> 
        </>
    )
}

export default Navbar

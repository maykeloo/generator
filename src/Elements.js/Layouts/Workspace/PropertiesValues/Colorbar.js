import { ColorBar,  ColorInBar, ColorText,  } from './ColorbarElements'
import { HuePicker } from 'react-color';

const Colorbar = (props) => {


    return (
        <>
            <ColorBar>
                <ColorInBar>
                    <ColorText>Color:</ColorText>
                    <HuePicker color = {props.color} onChangeComplete = {props.settingColor}/>
                </ColorInBar>
            </ColorBar>
        </>
    )
}

export default Colorbar

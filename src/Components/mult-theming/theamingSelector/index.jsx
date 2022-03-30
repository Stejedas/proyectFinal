import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react'
import { darkTheme, lightTheme, ThemingContext } from '../theming.context'
import { FcTwoSmartphones } from "react-icons/fc";
import './style.css'

function ThemingSelector(props) {

    const [theming,updateTheming] = useContext(ThemingContext); 
console.log(props)
    const changeTheme = e => {
        if(theming !== lightTheme){
            updateTheming(lightTheme)
        } else {
            updateTheming(darkTheme)
        }
    }
   
    return (
        <Form onChange={changeTheme} className=' d-flex flex-row transparent' /* style={{color: `${props?.props[1]}`, "background-color": `${props.props[0]}`}} */>
            <Form.Check
                
                type="switch"
                id={theming}
               
            />
            <FcTwoSmartphones className='fs-4 mb-1'   />
        </Form>

    )
}

export default ThemingSelector;
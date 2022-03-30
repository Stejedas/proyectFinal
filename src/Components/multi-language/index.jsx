import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next';
import espFlg from '../../Assets/Home/Carrusell/espFlg.png'
import ukFlg from '../../Assets/Home/Carrusell/ukFlg.png'
import { FcGlobe } from "react-icons/fc";
import { GrLanguage } from 'react-icons/gr'
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'


function MultiLenguage(props) {

    
    const [t, i18n] = useTranslation("translation");


    const [theming] = useContext(ThemingContext); 

    const [actualLenguage, uploadLenguage] = useState(t('translate.es'))



    const changeLenguageEsp = e => {
        i18n.changeLanguage('es')
     
    }
    const changeLenguageIng = e => {
        i18n.changeLanguage('en')
    }

    return (

        <Dropdown className="d-inline mx-2 "  >
            <Dropdown.Toggle id="dropdown-autoclose-true" >
               <FcGlobe className='fs-4 '    />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item value="es" onClick={changeLenguageEsp} className='d-flex align-items-center justify-content-end'>
                {t('translate.es')}
                 <img alt="" src={espFlg} width="16" height="16" className="d-inline-block align-top mx-1" /> </Dropdown.Item>
                <Dropdown.Item value="en" onClick={changeLenguageIng} className='d-flex align-items-center justify-content-end'>
                {t('translate.en')}  
                 <img alt="" src={ukFlg} width="16" height="16" className="d-inline-block align-top mx-1" /> </Dropdown.Item>
     

            </Dropdown.Menu>
        </Dropdown>

    )
}

export default MultiLenguage;
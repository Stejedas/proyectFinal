

import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../APP/index.jsx";

function CustomProtected({children}){

    
    let navigate = useNavigate();

    const token = localStorage.getItem('token');

    getUserData(token).then(e => {
        if(e.type !== 'SUPPLIER') navigate('/home')
    })

    return children;
}

export default CustomProtected;
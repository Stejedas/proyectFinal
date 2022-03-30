import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProtectedRouteUser({children}){

    
    let navigate = useNavigate();

    const token = localStorage.getItem('token');
            if(token === null || token === 'undefined')  {
                    return <Navigate to={`/home`} />
            } 

    return children;
}

export default ProtectedRouteUser;

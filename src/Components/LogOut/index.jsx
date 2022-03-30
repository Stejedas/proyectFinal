import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function LogOut(){

    const [t] = useTranslation("global");

    let navigate = useNavigate();

    const handleLogOut = e => {
        e.preventDefault()

        localStorage.removeItem('token')

        navigate('/Home')
    }


    return (
        <Button onClick={handleLogOut}>
            {t('logOut.x1')}
        </Button>
    )
}
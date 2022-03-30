import React from "react"
import FooterPage from "../../Components/Footer/index.jsx"
import FooterCustSupp from "../../Components/FooterCustSupp/index.jsx"
import HeaderSupp from "../../Components/HeaderSupp/index.jsx"
import TableSup from "../../Components/tableSup/index.jsx"
import { useEffect } from "react"
import { getUserData } from "../../APP/index.jsx"
import { useState } from "react"
import FooterSup from "../../Components/FooterSupp/index.jsx"

function SupplierPage(){
    const [user, uploadUser] = useState()
    const token = localStorage.getItem('token');

    useEffect(()=>{
    
        // traemos todos los datos del restaurante, para su zona perfil y para poder obtener las ofertas
        getUserData(token).then(e => uploadUser(e))

        // faltaria otro fetch al e.email posiblemente

    }, [])

   

    return (
        <React.Fragment>
        <HeaderSupp userData={user}></HeaderSupp>
        <TableSup userData={user}></TableSup>
        <FooterSup></FooterSup>
        </React.Fragment>

    )
}
export default SupplierPage
import React from "react";
import CustomerLanding from "../../Components/CustomerLanding";
import FooterCustSupp from "../../Components/FooterCustSupp";
import HeaderCustom from "../../Components/HeaderCustom";



function CustomerPage(){


    
   

    return (
        <React.Fragment>
       <HeaderCustom></HeaderCustom>
       <CustomerLanding></CustomerLanding>
      <FooterCustSupp></FooterCustSupp>
       </React.Fragment>
    )
}

export default CustomerPage;
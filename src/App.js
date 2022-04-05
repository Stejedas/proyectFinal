import "./custom.scss";

import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home';
import Validation from "./Pages/Validation";
import SingIn from "./Pages/SingIn";
import SingInCompany from "./Pages/SingInCompany";
import CustomerPage from "./Pages/Client";
import SupplierPage from "./Pages/Supplier";
import ProtectedRouteUser from "../src/Routes/Private/index.jsx";
import CustomProtected from "./Routes/Private/customprivate.jsx";
import OfferById from "./Pages/OffertById";
import MapStreet from "./Components/Map/index.jsx";
import RestInformation from "./Pages/RestInfo";
import RateValoration from "./Pages/RateValoration";
import PageError from "./Pages/ErrPag";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<HomePage></HomePage>} />
        <Route path='/validate' element={<Validation></Validation>}/>
        <Route path='/singIn' element={<SingIn></SingIn> }/>        
        <Route path='/singInCompany' element={<SingInCompany></SingInCompany>}/> 
        <Route path='/customer' element={<ProtectedRouteUser><CustomProtected><CustomerPage></CustomerPage></CustomProtected></ProtectedRouteUser>} />
        <Route path='/supplier' element={<ProtectedRouteUser><SupplierPage></SupplierPage></ProtectedRouteUser>} />
        <Route path='/customer/:offer' element={<ProtectedRouteUser><OfferById></OfferById></ProtectedRouteUser>} />
        <Route path='/rest' element={<ProtectedRouteUser><RestInformation></RestInformation></ProtectedRouteUser>} />
        <Route path='/rate' element={<RateValoration></RateValoration>} />
        <Route path='*' element={<ProtectedRouteUser><PageError></PageError></ProtectedRouteUser>} />
        
      </Routes>
    </BrowserRouter>
 
  
  );
}

export default App;

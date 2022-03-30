import { ThemingContext, lightTheme } from "./theming.context";
import { useState } from "react";

// se encarga de actualizar los valores de las Custom Properties
// en funcion de el objeto que entre




function ThemingProvider({ children }){

    const [theming,updateTheming] = useState(lightTheme); // L para light, D para dark

   

    return (
        <ThemingContext.Provider value={[theming, updateTheming]}>
            {children}
        </ThemingContext.Provider>
    )
}

export default ThemingProvider;
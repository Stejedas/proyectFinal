import { createContext  } from "react";

export const lightTheme = {
    primary: {
        color: 'lightprimary-100;',
        code: "#FFF9CC"
    },
    white:{
        color: 'white',
        code: '#FFFFFF'
    },
    whiteBlack:{
        color: 'black',
        code: '#000000'
    },
    black:{
        color: 'black',
        code: '#000000'
    },
    
    greyN:{
        color: 'lightgrey-normal',
        code: '#cfd8dc'
    },
    greyL:{
        color: 'lightgrey-light',
        code: '#ffffff'
    },
    greyD:{
        color: 'lightgrey-dark',
        code: '#9ea7aa'
    },
    tabN:{
        color: "lighttable-normal",
        code: '#eeeeee'
    },
    tabL:{
        color: "lighttable-light",
        code: '#ffffff'
    },
    tabD:{
        color: "lighttable-dark",
        code: '#bcbcbc'
    },
    tabSpecial:{
        color: "light"
    },
    blueN:{
        color: "lightblue-normal",
        code: "#b2dfdb"
    },
    blueL:{
        color: "lightblue-light",
        code: "#e5ffff"
    },
    blueD:{
        color: "lightblue-dark",
        code: "#81ada9"
    },
    blueTra:{
        color: "lightblue-dark-trans",
        code: "rgb(129, 173, 169, 0.7)"
    },
    cardN:{
        color: "lightcard-normal",
        code: "#ffe0b2"
    },
    cardL:{
        color: "lightcard-light",
        code: "#ffffff"
    },
    cardD:{
        color: "lightcard-dark",
        code: "#cccab5"
    },
    cardBanner:{
        color: "lightcardbanner-normal",
        code: "#dcedc8"
    },
    backA:{
        color: "lightback-normal",
        code: "#ffffff"
    }

}

export const darkTheme = {
    primary: {
        color: 'darkprimary-100',
        code: "#4c4545"
    },
    white:{
        color: 'white',
        code: '#FFFFFF'
    },
    whiteBlack:{
        color: 'white-070',
        code: '#F7F7F7'
    },
    black:{
        color: 'black',
        code: '#000000'
    },
   
    greyN:{
        color: 'darkgrey-normal',
        code: '#37464f'
    },
    greyL:{
        color: 'darkgrey-light',
        code: '#62717b'
    },
    greyD:{
        color: 'darkgrey-dark',
        code: '#101f27'
    },
    tabN:{
        color: "darktable-normal",
        code: '#616161'
    },
    tabL:{
        color: "darktable-light",
        code: '#8e8e8e'
    },
    tabD:{
        color: "darktable-dark",
        code: '#373737'
    },
    tabSpecial:{
        color: "dark"
    },
    blueN:{
        color: "darkblue-normal",
        code: "#37474f"
    },
    blueL:{
        color: "darkblue-light",
        code: "#62727b"
    },
    blueD:{
        color: "darkblue-dark",
        code: "#102027"
    },
    blueTra:{
        color: "darkblue-dark-trans",
        code: "rgb(16, 32, 39, 0.7)"
    },
    cardN:{
        color: "darkcard-normal",
        code: "#6d4c41"
    },
    cardL:{
        color: "darkcard-light",
        code: "#9c786c"
    },cardD:{
        color: "darkcard-dark",
        code: "#40241a"
    },
    cardBanner:{
        color: "darkcardbanner-normal",
        code: "#004d40"
    },
    backA:{
        color: "darkback-normal",
        code: "#41545e"
    }
}

export const ThemingContext = createContext('L')
import {ColorsTheme, ThemeProvider} from "@src/provider/provider";
import {TextStyle} from "@src/styles/classes/typegraphy";
import React from "react";


const themas:ColorsTheme = {
    "black":{
        background: "blue",
        general:"blue"
    },
    "light": {
        general: "red",
        background:"red"
    },
    "dark": {
        background: "black",
        general:"black"
    }
}


export const SetupProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    return <ThemeProvider
        typography={{
            displayLarge: new TextStyle(),
            displayMedium: new TextStyle(),
            displaySmall: new TextStyle()
        }}
        shapes={{}}
        currentThema={"light"}
        colorsSchema={themas}
        enabledDynamicThemeDate={true}
    >
        {children}
    </ThemeProvider>
}
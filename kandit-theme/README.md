This library is designed to work with themes, currently supporting color changes, dynamic themes, and more. Below is an example of how to use it

```
import { ColorsTheme, ThemeProvider } from "@src/provider/provider";
import { TextStyle } from "@src/styles/classes/typegraphy";
import React from "react";


const themes: ColorsTheme = {
    "black": {
        background: "blue",
        general: "blue"
    },
    "light": {
        general: "red",
        background: "red"
    },
    "dark": {
        background: "black",
        general: "black"
    }
}

export const SetupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider
            typography={{
                displayLarge: new TextStyle(),
                displayMedium: new TextStyle(),
                displaySmall: new TextStyle()
            }}
            shapes={{}}
            enabledDynamicThemeDate={true}
            colorsSchema={themes}
        >
            {children}
        </ThemeProvider>
    );
}
```
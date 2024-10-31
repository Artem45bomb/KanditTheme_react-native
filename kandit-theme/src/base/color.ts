import { IColorsApi } from "@li/src/styles/interfaces/colors";




export const colorsBase: IColorsApi = {
    background: "black",
    general:"red"
}

export type ColorKey = keyof IColorsApi
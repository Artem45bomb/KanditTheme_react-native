import React, {createContext, FC} from "react";
import { ThemeBase } from "../base";
import {IColorsApi,IKanditTheme,KanditTheme} from "../styles";
import { TU } from "../type";
import { ProviderOptions } from "./type";

export type ColorsTheme = Record<string,TU<IColorsApi>>
export type PContext = {value:KanditTheme,setValue:(thema:string) => void}

export const createTheme = (theme: KanditTheme = ThemeBase) => {
	return createContext<PContext>({value:theme,setValue:() =>{}});
}

export const Theme = createTheme()

export interface Provider{
	colorsSchema?: ColorsTheme,
	typography?:TU<IKanditTheme['typography']>,
	shapes?:TU<IKanditTheme['shapes']>
	currentThema?: string,
	options?:ProviderOptions
	children:React.ReactNode
}

export const ThemeProvider: FC<Provider> = (params) => {
	const { options, colorsSchema, typography, shapes } = params 
	let currentThema = params.currentThema ?? "light"

	if (options && options.enabledDynamicThemeDate) {
		const hours = new Date().getHours()
		currentThema = (hours >= 8 && 20 > hours) ? "light" : "dark"
	}

	const [value, setValue] = React.useState(currentThema ?? "light");

	const MainThema = new KanditTheme({
		currentTheme: currentThema,
		colors: colorsSchema && colorsSchema[value],
		typography:typography,
		shapes
	})

	return <Theme.Provider value={{value:MainThema,setValue}}>
		{params.children}
	</Theme.Provider>
}
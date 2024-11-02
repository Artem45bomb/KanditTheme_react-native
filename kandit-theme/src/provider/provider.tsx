import { KanditTheme } from "../styles";
import React, {createContext, FC, useEffect} from "react";
import { ThemeBase } from "../base";
import {IColorsApi} from "../styles";
import {IKanditTheme} from "../styles";
import { TU } from "../type";

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
	enabledDynamicThemeDate?:boolean,
	setThema?:(arg:string) => void,
	children:React.ReactNode
}

export const ThemeProvider: FC<Provider> = (params) => {
	const { enabledDynamicThemeDate, colorsSchema, typography, shapes } = params 
	let currentThema = params.currentThema ?? "light"

	if (enabledDynamicThemeDate) {
		const hours = new Date().getHours()
		currentThema = (hours >= 8 && 20 > hours) ? "light" : "dark"
	}

	const [value,setValue] = React.useState(currentThema ?? "light");

	

	useEffect(() => {
		return () =>{}
	},[])

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
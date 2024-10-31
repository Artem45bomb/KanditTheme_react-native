import { KanditTheme } from "@li/src/styles/classes/theme";
import React, {createContext, FC, useEffect} from "react";
import { ThemeBase } from "@li/src/base/theme";
import {IColorsApi} from "@src/styles/interfaces/colors";
import {IKanditTheme} from "@src/styles/interfaces/theme";
import {colorsBase} from "@src/base/color";
import { TU } from "../type/types";

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
		colors:(colorsSchema && colorsSchema[value ?? "light"]) || colorsBase,
		typography:typography,
		shapes
	})

	return <Theme.Provider value={{value:MainThema,setValue}}>
		{params.children}
	</Theme.Provider>
}
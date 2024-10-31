import type { ColorValue,TextStyle } from "react-native"

export interface ITypographyApi{
	displaySmall: ITextStyle,
	displayLarge: ITextStyle,
	displayMedium: ITextStyle,
}

export interface ITextStyle {
	color: ColorValue,
	letterSpacing: number,
	fontSize: number,
	fontWeight:TextStyle['fontWeight']
}



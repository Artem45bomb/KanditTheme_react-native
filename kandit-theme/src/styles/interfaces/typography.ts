import type { ColorValue,TextStyle } from "react-native"

export interface ITypographyApi{
	displayLarge: TextStyle;
	displayMedium: TextStyle;
	displaySmall: TextStyle;
	headlineLarge: TextStyle;
	headlineMedium: TextStyle;
	headlineSmall: TextStyle;
	titleLarge: TextStyle;
	titleMedium: TextStyle;
	titleSmall: TextStyle;
	bodyLarge: TextStyle;
	bodyMedium: TextStyle;
	bodySmall: TextStyle;
	labelLarge: TextStyle;
	labelMedium: TextStyle;
	labelSmall: TextStyle;
}

export interface ITextStyle {
	color: ColorValue,
	letterSpacing: number,
	fontSize: number,
	fontWeight:TextStyle['fontWeight']
}



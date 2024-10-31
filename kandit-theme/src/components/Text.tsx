import React,{ FC } from "react"
import Native from "react-native"
import { useTheme } from "../hooks/theme"


export const Text: FC<Native.TextProps> = (props) => {
	const {value} = useTheme()

	return <Native.Text
		{...props}
		style={[{
		fontSize:value.typography.displayLarge.fontSize,
		fontWeight: value.typography.displayLarge.fontWeight,
		letterSpacing: value.typography.displayLarge.letterSpacing,
		color: value.typography.displayLarge.color
		},props.style]}
	/>
}
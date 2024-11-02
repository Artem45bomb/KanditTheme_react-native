import React,{ FC } from "react"
import Native from "react-native"
import { useTheme } from "../hooks"


export const Text: FC<Native.TextProps> = (props) => {
	const {value,setValue} = useTheme()

	return <Native.Text
		{...props}
		onPress={() =>setValue("dark")}
		style={[{
		fontSize:value.typography.bodyMedium.fontSize,
		fontWeight: value.typography.bodyMedium.fontWeight,
		letterSpacing: value.typography.bodyMedium.letterSpacing,
		color: value.typography.bodyMedium.color
		},props.style]}
	/>
}
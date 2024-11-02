import React,{ FC, useContext } from "react"
import Native from "react-native"
import { Theme } from "../provider"


export const Surface: FC<Native.ViewProps> = (props) => {
	const {value} = useContext(Theme)

	return <Native.View
		{...props}
		style={[{backgroundColor:value.colors.general},props.style]}
	/>
}
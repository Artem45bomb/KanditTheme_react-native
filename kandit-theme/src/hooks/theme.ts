import { useContext } from "react"
import { Theme } from "../provider"




export const useTheme = () => {
	return useContext(Theme)
}
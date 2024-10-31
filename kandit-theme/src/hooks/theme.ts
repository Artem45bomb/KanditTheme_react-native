import { useContext } from "react"
import { PContext, Theme } from "../provider/provider"




export const useTheme = (context:React.Context<PContext> | undefined = undefined) => {
	const thema = useContext(context ?? Theme)
	console.log(`${context != undefined ? "context:"+context:""}`)
	return thema == null ? useContext(Theme) : thema
}
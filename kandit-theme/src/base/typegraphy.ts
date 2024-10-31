import { TextStyle } from "@li/src/styles/classes/typegraphy";
import { ITypographyApi } from "@li/src/styles/interfaces/typography";


export const typographyBase:ITypographyApi = {
	displayLarge: new TextStyle(),
	displayMedium: new TextStyle(),
	displaySmall: new TextStyle()
}

export type TypographyKey = keyof ITypographyApi
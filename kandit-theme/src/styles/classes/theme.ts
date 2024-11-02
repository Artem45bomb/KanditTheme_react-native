import { colorsBase } from "../../base";
import { shapesBase } from "../../base"
import { typographyBase } from "../../base"
import { IColorsApi } from "../../styles"
import { IShapesApi } from "../../styles"
import { IKanditTheme,UKanditTheme } from "../../styles"
import { ITypographyApi } from "../../styles"
import { TU } from "../../type"

function replacedStyle<B,T extends {[key in keyof B]?:B[key]}>(params: T, baseTheme: B):B
{
	if (params) {
		for (const key of Object.keys(params) as Array<keyof B>) {
			if (params[key] !== undefined) {
				const value = params[key]
				//@ts-ignore
				baseTheme[key] = value
			}
		}
	}

	return baseTheme
}


export class KanditTheme implements IKanditTheme{
	private readonly _typography: ITypographyApi
	private readonly _colors: IColorsApi
	private readonly _shapes: IShapesApi

	constructor(params: TU<UKanditTheme & {currentTheme:string}> = {}) {
		
		const currentTheme = params.currentTheme == "dark" ? "dark" : "light"

		this._colors = params.colors ? replacedStyle(params.colors, colorsBase[currentTheme]) : colorsBase[currentTheme]
		this._typography = params?.typography ? replacedStyle(params.typography, typographyBase) : typographyBase
		this._shapes = params?.shapes ? replacedStyle(params.shapes,shapesBase) : shapesBase
	}

	public get typography(): ITypographyApi {
		return this._typography
	}

	public get colors(): IColorsApi {
		return this._colors
	}

	public get shapes(): IShapesApi {
		return this._shapes
	}
}
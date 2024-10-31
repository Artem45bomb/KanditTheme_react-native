import { colorsBase } from "@li/src/base/color";
import { shapesBase } from "@li/src/base/shapes";
import { typographyBase } from "@li/src/base/typegraphy";
import { IColorsApi } from "@li/src/styles/interfaces/colors";
import { IShapesApi } from "@li/src/styles/interfaces/shapes";
import { IKanditTheme,UKanditTheme } from "@li/src/styles/interfaces/theme";
import { ITypographyApi } from "@li/src/styles/interfaces/typography";
import { TU } from "@li/src/type/types";

function replacedStyle<B extends object,T extends {[key in keyof B]?:B[key]}>(params: T, baseTheme: B):B
{
	if (params) {
		for (const key of Object.keys(params) as Array<keyof B>) {
			if (params[key] !== undefined) {
				const value = params[key] as B[keyof B]
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

	constructor(params: TU<UKanditTheme> = {}) {
		this._colors = params.colors ? replacedStyle(params.colors, colorsBase) : colorsBase
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
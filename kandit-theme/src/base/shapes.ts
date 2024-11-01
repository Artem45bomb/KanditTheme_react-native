import { IShapesApi } from "@li/src/styles/interfaces/shapes";



export const shapesBase: IShapesApi = {
	medium: 16,
	small: 16,
	extraSmall: 16,
	large: 16,
	extraLarge: 16,
}

export type ShapeKey = keyof IShapesApi
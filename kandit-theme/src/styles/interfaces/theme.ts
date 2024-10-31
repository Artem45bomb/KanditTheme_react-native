import { TU } from "@li/src/type/types";
import { IColorsApi } from "./colors";
import { IShapesApi } from "./shapes";
import { ITypographyApi } from "./typography";


export interface IKanditTheme{
	typography: ITypographyApi
	colors: IColorsApi
	shapes:IShapesApi
}


export interface UKanditTheme{
	typography: TU<ITypographyApi>
	colors: TU<IColorsApi>
	shapes: TU<IShapesApi>
}
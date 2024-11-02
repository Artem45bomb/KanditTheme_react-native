import { ColorValue } from "react-native";
import { ITextStyle } from "../../styles";
import { TU } from "../../type";


export class TextStyle implements ITextStyle {
	private readonly _color: ColorValue
	private readonly _letterSpacing: number
	private readonly _fontSize: number
	private readonly _fontWeight: ITextStyle["fontWeight"]

	constructor(params: TU<ITextStyle> = {}) {
		this._color = params.color ?? "#000000"
		this._letterSpacing = params.letterSpacing ?? 0.5
		this._fontSize = params.fontSize ?? 16
		this._fontWeight = params.fontWeight ?? "400"
	}
	
	public get color(): ColorValue {
		return this._color
	}

	public get letterSpacing(): number {
		return this._letterSpacing
	}

	public get fontSize(): number {
		return this._fontSize
	}

	public get fontWeight(): ITextStyle["fontWeight"] {
		return this._fontWeight
	}
}
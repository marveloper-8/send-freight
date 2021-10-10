import { FunctionComponent } from 'react'
import { InputTextModel } from '../utils/models'
import * as Style from '../styles/widgets/input'

const InputText: FunctionComponent<InputTextModel> = ({placeholder, type, styleType}) => {
    let Component

    switch (styleType) {
        case "one":
            Component = Style.One;
            break;
        case "two":
            Component = Style.Two;
            break;
        case "three":
            Component = Style.Three;
            break;
        case "four":
            Component = Style.Four;
            break;
        default:
            Component = Style.One;
    }

    return (
        <Component placeholder={placeholder} />
    )
}

export default InputText
import { FunctionComponent } from 'react'
import { ButtonModel } from '../utils/models'
import * as Style from '../styles/widgets/button'

const Button: FunctionComponent<ButtonModel> = ({ text, styleType, onClick }) => {
    let Component

    switch (styleType) {
        case "one":
            Component = Style.One;
            break;
        case "two":
            Component = Style.Two;
            break;
        default:
            Component = Style.One;
    }

    return (
        <Component onClick={onClick}>
            {text}
        </Component>
    )
}

export default Button
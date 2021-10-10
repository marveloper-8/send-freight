import { FunctionComponent } from 'react'
import {ServicesModel} from '../utils/models'
// styling
import * as Style from '../styles/components/services'

const Services: FunctionComponent<ServicesModel> = ({text, id, data, onClick}) => {
    return (
        <Style.Container id={data.id} active={id === data.id} onClick={onClick}>
            {text}
        </Style.Container>
    )
}

export default Services
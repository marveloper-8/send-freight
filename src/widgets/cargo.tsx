import { FunctionComponent, useState } from 'react'
import { CargoWidgetModel } from '../utils/models'
// styling
import * as Style from '../styles/widgets/cargo-widget'
// data
import cargo from '../data/cargo.json'

const CargoWidget: FunctionComponent<CargoWidgetModel> = ({ text, id, data, onClick }) => {
    const [active, setActive] = useState(1)
    return (
        <Style.Container onClick={onClick}>
            {cargo.map((item: any) => {
                return (
                    <Style.Item 
                        onClick={() => setActive(item.id)} 
                        active={active === item.id}
                    >{item.name}</Style.Item>
                )
            })}

        </Style.Container>
    )
}

export default CargoWidget
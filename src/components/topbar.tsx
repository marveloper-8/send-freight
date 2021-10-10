// styling
import * as Style from '../styles/components/topbar'
// components
import TextInput from '../widgets/input-text'
import Button from '../widgets/button'
// icons
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = () => {
    return (
        <Style.Container>
            <Style.LeftSection>
                <Style.Logo>Send FREIGHT</Style.Logo>
                <Style.Search>
                    <TextInput placeholder="Search" styleType="one" />
                    <AiOutlineSearch style={{color: "white"}} />
                </Style.Search>
            </Style.LeftSection>
            <Style.RightSection>
                <Button text="Request Quote" styleType="one" />
                <Button text="Book Shipment" styleType="two" />
            </Style.RightSection>
        </Style.Container>
    )
}

export default Topbar
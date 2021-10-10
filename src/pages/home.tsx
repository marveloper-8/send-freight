import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
// styling
import * as Style from '../styles/pages/home'
import {color} from '../styles/constants'
// components
import Topbar from "../components/topbar"
import Services from '../components/services'
import AdditionalServices from '../components/additional-services'
// widgets
import ImportExportWidget from '../widgets/import-export'
import CargoWidget from '../widgets/cargo'
import TextInput from '../widgets/input-text'
// icons
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillCaretDown } from 'react-icons/ai'
// data
import services from '../data/services.json'
import additionalServices from '../data/additional-services.json'

const Home = () => {
    const [service, setService] = useState(1)


    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
            backgroundColor: color.primary,
            opacity: 1,
            border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
        },
        '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        },
        '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: color.grey,
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
        },
    }));

    return (
        <>
            <Topbar />
            <Style.Page>
                <Style.Back>
                    <AiOutlineArrowLeft />
                </Style.Back>
                <Style.Header>
                    <Style.Head>New Booking</Style.Head>
                    <Style.Small>Fill in the information below to get a quote or create a new booking</Style.Small>
                </Style.Header>
                <Style.Section>
                    <Style.Header2><Style.Head2>Select a service</Style.Head2></Style.Header2>
                    <Style.ServicesContainer>
                        {services.map((item: any) => {
                            return (
                                <Services
                                    text={item.name}
                                    id={service}
                                    data={item}
                                    onClick={() => setService(item.id)}
                                />
                            )
                        })}
                    </Style.ServicesContainer>
                </Style.Section>
                <Style.Section>
                    <AiOutlineInfoCircle />
                    <Style.ImportExportToFro>
                        <ImportExportWidget />
                        <Style.Input>
                            <Style.InputAdornment>
                                <AiOutlineInfoCircle /> <Style.InputAdornmentLabel>From</Style.InputAdornmentLabel>
                            </Style.InputAdornment>
                            <TextInput placeholder="City or port" styleType="two" />
                        </Style.Input>
                        <Style.Input>
                            <Style.InputAdornment>
                                <AiOutlineInfoCircle /> <Style.InputAdornmentLabel>To</Style.InputAdornmentLabel>
                            </Style.InputAdornment>
                            <TextInput placeholder="City or port" styleType="two" />
                        </Style.Input>
                    </Style.ImportExportToFro>
                    <Style.ImportExportExtraDetails>
                        <Style.Input>
                            <Style.InputAdornment>
                                <AiFillCalendar />
                            </Style.InputAdornment>
                            <TextInput placeholder="Ready Date" styleType="three" />
                        </Style.Input>
                        <Style.Input>
                            <TextInput placeholder="Incotems" styleType="three" />
                            <Style.InputAdornment2>
                                <AiFillCaretDown />
                            </Style.InputAdornment2>
                        </Style.Input>
                        <Style.Input>
                            <TextInput placeholder="Total Cargo Value" styleType="four" />
                        </Style.Input>
                    </Style.ImportExportExtraDetails>
                </Style.Section>
                <Style.Section>
                    <Style.Header2>
                        <Style.Head2>Cargo Details</Style.Head2>
                        <span>
                            <IOSSwitch sx={{ m: 1 }} defaultChecked />
                            <b>Dangerous Cargo</b> (ex. Chemicals, Battery)
                        </span>
                    </Style.Header2>
                    <CargoWidget />
                    <Style.CargoMeasurement>
                        <Style.Input2>
                            <Style.Input2Label>Total Volume</Style.Input2Label>
                            <TextInput placeholder="Incotems" styleType="five" />
                            <Style.InputAdornment2>
                                cbm
                            </Style.InputAdornment2>
                        </Style.Input2>
                        <Style.Input2>
                            <Style.Input2Label>Total Volume</Style.Input2Label>
                            <TextInput placeholder="Incotems" styleType="five" />
                            <Style.InputAdornment2>
                                Kg
                            </Style.InputAdornment2>
                        </Style.Input2>
                    </Style.CargoMeasurement>
                </Style.Section>
                <Style.Section>
                    <Style.Header2>
                        <Style.Head2>Additional Services</Style.Head2>
                    </Style.Header2>
                    <Style.AdditionalServices>
                        {additionalServices.map((item: any) => {
                            return <AdditionalServices name={item.name} summary={item.summary} />
                        })}
                    </Style.AdditionalServices>
                </Style.Section>
            </Style.Page>
        </>
    )
}

export default Home
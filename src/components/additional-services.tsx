import { FunctionComponent } from 'react'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import {AdditionalServicesModel} from '../utils/models'
// styling
import {color} from '../styles/constants'
import * as Style from '../styles/components/additional-services'
import * as ParentStyle from '../styles/pages/home'

const AdditionalServices: FunctionComponent<AdditionalServicesModel> = ({id, name, summary}) => {
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
        <Style.Container>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
            <Style.Content>
                <ParentStyle.Head2>{name}</ParentStyle.Head2>
                <ParentStyle.Small>{summary}</ParentStyle.Small>
            </Style.Content>
        </Style.Container>
    )
}

export default AdditionalServices
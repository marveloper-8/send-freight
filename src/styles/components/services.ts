import styled from 'styled-components'
import {ServicesStyleModel} from '../../utils/models'
import {color} from '../constants'
import aeroplane from '../../icons/aeroplane.png'
import guard from '../../icons/guard.png'
import ship from '../../icons/ship.png'
import truck from '../../icons/truck.png'
import aeroplane2 from '../../icons/aeroplane2.png'
import guard2 from '../../icons/guard2.png'
import ship2 from '../../icons/ship2.png'
import truck2 from '../../icons/truck2.png'

export const Container = styled.div<ServicesStyleModel> `
    padding: 0 20px;
    height: 105px;
    display:flex;
    align-items:center;
    border-radius: 5px;
    cursor: pointer;
    transiton: .5s ease-in-out background;
    border: 1px solid ${props => props.active ? color.primary : color.color1};
    color: ${props => props.active ? color.white : color.grey};
    background: ${props => props.active && color.primary};
    background-image: url(${props => 
        props.id === 1 ? aeroplane2 : 
        props.id === 2 ? ship2 : 
        props.id === 3 ? truck2 : 
        props.id === 4 ? guard2 : 
        props.id === 1 && props.active ? aeroplane : 
        props.id === 2 && props.active ? ship : 
        props.id === 3 && props.active ? truck : 
        props.id === 4 && props.active ? guard : 
        ""
    });
    background-size: 50px;
    background-repeat: no-repeat;
    background-position:185px 65px;
    &:hover{
        transition: .5s ease-in-out all;
        border: 1px solid ${color.primary};
    }
    @media (max-width: 770px){
        background-size: 100px;
        background-position:200px 25px;
    }
`;
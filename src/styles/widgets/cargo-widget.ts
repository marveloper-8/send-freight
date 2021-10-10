import styled from 'styled-components'
import {CargoWidgetModel} from '../../utils/models'
import {color} from '../constants'

export const Container = styled.div`
    background: ${color.color2};
    display: inline-block;
    padding: 3px;
    border-radius: 5px;
    @media (max-width: 770px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
  `;

  export const Item = styled.div<CargoWidgetModel> `
    padding: 5px 10px;
    display:inline-block;
    cursor: pointer;
    transiton: .5s ease-in-out background;
    color: ${props => props.active ? color.primary : color.grey};
    background: ${props => props.active && color.white};
    border-radius: 5px;
    text-align: center;
    &:hover{
        color: ${color.primary};
        transition: .5s ease-in-out all;
    }
`;
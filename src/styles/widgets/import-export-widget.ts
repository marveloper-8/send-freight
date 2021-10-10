import styled from 'styled-components'
import {ImportExportWidgetModel} from '../../utils/models'
import {color} from '../constants'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;

  export const Item = styled.div<ImportExportWidgetModel> `
    border: 1px solid ${props => props.active ? color.primary : color.color1};
    padding: 5px 10px;
    display:flex;
    cursor: pointer;
    transiton: .5s ease-in-out background;
    color: ${props => props.active ? color.white : color.grey};
    background: ${props => props.active && color.primary};
    border-radius: 3px 0 0 3px;
    &:hover{
        color: ${color.white};
        transition: .5s ease-in-out all;
        background: ${color.primary};
        border: 1px solid ${color.primary};
    }
    &:last-child{
        border-left:none;
        border-radius: 0 3px 3px 0;
    }
`;
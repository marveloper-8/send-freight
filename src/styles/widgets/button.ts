import styled from 'styled-components'
import { color } from '../constants'

export const One = styled.button`
  display: inline-block;
  color: ${color.white};
  margin-left: 20px;
  padding: 5px 15px;
  border: 1px solid ${color.white};
  background: none;
  border-radius: 3px;
  outline: none;
  @media (max-width: 770px){
    margin: 0;
  }
`;

export const Two = styled.button`
display: inline-block;
color: ${color.white};
margin-left: 20px;
padding: 5px 15px;
border: 1px solid ${color.green};
background: ${color.green};
border-radius: 3px;
outline: none;
@media (max-width: 770px){
  margin: 0;
}
`;
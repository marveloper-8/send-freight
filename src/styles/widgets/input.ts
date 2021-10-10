import styled from 'styled-components'
import {color, fontSize} from '../constants'

export const One = styled.input.attrs(props => ({
    type: "text",
    value: props.value
  }))`
    border: none;
    outline: none;
    background: none;
    font-size: ${fontSize.size12};
    width: 90%;
    color: ${color.white};
    &::placeholder{
        color: ${color.white};
    }
  `;

  export const Two = styled.input.attrs(props => ({
      type: "text",
      value: props.value
    }))`
      border: none;
      outline: none;
      background: none;
      font-size: ${fontSize.size12};
      width: 80%;
      color: ${color.black}
      &::placeholder{
          color: ${color.color1};
      }
    `;

    export const Three = styled.input.attrs(props => ({
        type: "text",
        value: props.value
      }))`
        border: none;
        outline: none;
        background: none;
        font-size: ${fontSize.size12};
        width: 90%;
        color: ${color.black}
        &::placeholder{
            color: ${color.color1};
        }
      `;

      export const Four = styled.input.attrs(props => ({
          type: "text",
          value: props.value
        }))`
          border: none;
          outline: none;
          background: none;
          font-size: ${fontSize.size12};
          width: 100%;
          color: ${color.black}
          &::placeholder{
              color: ${color.color1};
          }
        `;

        export const Five = styled.input.attrs(props => ({
            type: "text",
            value: props.value
          }))`
            border: none;
            outline: none;
            background: none;
            font-size: ${fontSize.size12};
            width: 80%;
            color: ${color.black}
            &::placeholder{
                color: ${color.color1};
            }
          `;

  
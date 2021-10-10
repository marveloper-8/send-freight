import styled from 'styled-components'
import {color} from '../constants'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${color.primary};
    padding:10px 20px;
    @media (max-width: 770px){
        display: block;
    }
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 770px){
        display: block;
    }
`;

export const RightSection = styled.div`
    @media (max-width: 770px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
`;

export const Logo = styled.div`
    margin-right:50px;
    color: ${color.white};
    @media (max-width: 770px){
        text-align: center;
        margin: 0;
    }
`;

export const Search = styled.div`
    width:300px;
    background: rgba(255, 255, 255, .3);
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 770px){
        width: auto;
        margin: 10px 0;
    }
`;
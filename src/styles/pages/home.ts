import styled from 'styled-components'
import { color, fontSize } from '../constants'

// page
export const Page = styled.div`
    position: relative;
    padding: 20px 200px;
    @media (max-width: 770px){
      padding: 20px;
    }
`;

// back
export const Back = styled.div`
    position:fixed;
    top: 70px;
    left: 100px;
    @media (max-width: 770px){
        position: relative;
        top: 0;
        left: 0;
        margin-bottom: 20px;
    }
`;

// header
export const Header = styled.div`
    margin-bottom: 30px;
`;
export const Head = styled.div`
    margin-bottom: 5px;
    font-size: ${fontSize.size18};
`;
export const Header2 = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (max-width: 770px){
        display: block;
    }
`;
export const Head2 = styled.div`
    font-size: ${fontSize.size16};
`;

// section
export const Section = styled.div`
    padding: 25px 50px;
    background: ${color.white};
    margin-bottom: 25px;
    font-size: ${fontSize.size12};
    @media (max-width: 770px){
      padding: 20px;
    }
`;

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    @media (max-width: 770px){
      grid-template-columns: 1fr;
    }
`;

export const ImportExportToFro = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    grid-gap: 40px;
    margin-bottom:40px;
    @media (max-width: 770px){
        margin: 20px 0;
        grid-template-columns: 1fr;
        grid-gap: 20px
    }
`;

export const ImportExportExtraDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    @media (max-width: 770px){
        grid-template-columns: 1fr;
        grid-gap: 20px
    }
`;

export const CargoMeasurement = styled.div`
    margin-top:35px;
    display: flex;
    @media (max-width: 770px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px
    }
`;

export const AdditionalServices = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-grap: 40px;
    @media (max-width: 770px){
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`;

// inputs
export const Input = styled.div`
    background: ${color.color2};
    border-radius: 3px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Input2 = styled.div`
    border: 1px solid ${color.color2};
    border-radius: 3px;
    padding: 15px 15px;
    width: 150px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    margin-right: 25px;
    @media (max-width: 770px){
        width: auto;
        margin: 0;
    }
`;

export const Input2Label = styled.div`
    position:absolute;
    background: ${color.white};
    padding: 0 5px;
    font-size: ${fontSize.size10};
    top: -6px;
    left: 5px;
`;

export const InputAdornment = styled.span`
    margin-right: 10px;
    display:flex;
    align-items: center;
`;

export const InputAdornment2 = styled.span`
    margin-left: 10px;
    display:flex;
    align-items: center;
    color: ${color.color1};
`;

export const InputAdornmentLabel = styled.span`
    margin-left: 10px;
`;

// sentences
export const Small = styled.div`
    font-size: ${fontSize.size12};
    color: ${color.grey};
`;
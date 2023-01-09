import styled from "styled-components";

export type variantType = "red" | "green" | "black" | "blue" 
interface IContainerProps {
    type: variantType
}

const colorSelected = {
    red: '--bs-red',
    green: '--bs-green-text',
    black: '--bs-black',
    blue: '--bs-blue',

}

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 253px;
    width: 233px;
    border-radius: 15px;
    //border: 1px solid var(--bs-blue);
    background: var(--bs-white);
    align-items: center;
    
    svg {
        font-size: 43px;
        color:   var(${({ type }) => colorSelected[type]});
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
        color:   var(${({ type }) => colorSelected[type]});
    }

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: var(--bs-black);
    }
`;
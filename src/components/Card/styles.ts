import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 253px;
    width: 233px;
    border-radius: 15px;
    border: 1px solid var(--bs-blue);
    background: var(--bs-blue);
    align-items: center;
    
    svg {
        font-size: 43px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
    }

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: var(--bs-white);
    }
`;
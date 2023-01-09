import styled from "styled-components";

export const Container = styled.div`
    .content-link {
        border: 1px solid pink;
        padding: 1rem;
        display: flex;
        align-items: center;
        height: 400px;
        box-shadow: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));;
        justify-content: center;
        
        a {
            text-align: center;
            border-radius: 5px;
            padding: 15px;
            width: 11rem;
            background: var(--bs-blue-bg);
            color: var(--bs-white);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 10px 10px 21px -6px rgba(0,0,0,0.45);

            svg {
                font-size: 1.65rem;
            }
        }
    }

`;

export const Content = styled.div`
    height: 550px;
    width: 100%;
    background: var(--bs-blue-bg);
    display: flex;
    justify-content: space-evenly;
    color: var(--bs-white);
 
    .content-title {
        padding-top: 2rem;
        h1 {
            margin-bottom: 1.5rem;
            font-size: 64px;
        }
        p {
            max-width: 440px;
            font-size: 54px;
        }
        span {
            color: var(--bs-green-text);
        }
    }

    
`;
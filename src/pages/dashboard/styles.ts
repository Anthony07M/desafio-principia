import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    from{
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--bs-black-bg);
    padding: 0 100px;
    animation: ${Animation} 1s ease;

    h1 {
        color: var(--bs-white);
        margin-top: 2rem;
        font-family: 'Inter';
    }

    .content-drop-down {
        width: 79%;
        margin: 0 auto;
        margin-bottom: 2rem;
        text-align: right;
    }

    .content-chart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        .chart {
            border: 10px solid pink;
            display: flex;
            margin: 0 auto;
        }
    }
    
    .modal-open {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        opacity: 1;
        visibility: visible;
        height: 550px;
        width: 600px;
        padding: 10px;
        background: #f7f4f4;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: ${Animation} 1s ease;
        border-radius: 10px;
        h3 {
            font-size: 2rem;
        }

        svg {
            cursor: pointer;
            position: absolute;
            top: 15px;
            right: 20px;
            font-weight: bold;
            font-size: 1.75rem;
        }

        svg:hover{
            color: red;
        }
    }

    .modal-close {
        opacity: 0;
        display: none;
    }
`;


export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    gap: 70px;
`;
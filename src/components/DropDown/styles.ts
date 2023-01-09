import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    border-radius: 10px;
    width: 100px;
    border: 2px solid var(--bs-blue);
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    display: inline-block;

    h4{
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--bs-white);
    }

    .active {
        opacity: 1;
        visibility: visible;
    }

    .inactive {
        opacity: 0;
        display: none;
    }

    ul {
        position: absolute;
        background-color: #f9f9f9;
        border-radius: 10px;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        li {
            padding: 12px 16px;
            border-radius: 10px;
            text-align: left;
        }

        li:hover{
            background: gray;
            transition: 800ms ease;
            color: var(--bs-white);
        }
    }
`;
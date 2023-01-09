import styled from "styled-components";

export const Container = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 79%;
    margin: 3rem 0;

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr {
        color: var(--bs-white);
    }

    tr:nth-child(even) {
        background-color: var(--bs-blue);
        color: var(--bs-white);
    }

    .td-button {
        &:hover{
            background: #9ba3ae;
        }
        cursor: pointer;
        svg {
            position: relative;
            top: 3px;
        }
    }
`;
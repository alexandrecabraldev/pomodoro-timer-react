import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`

    width: 74rem;
    height: calc(100vh -10rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem auto;
    padding: 2.5rem;
    
    background-color: ${props=>props.theme["gray-800"]};

    border-radius:8px;

`;
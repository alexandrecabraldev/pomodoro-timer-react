import styled from "styled-components";

export const HomeStyle = styled.main`

    form{
        display: flex;
        gap: 3.5rem;
        flex-direction: column;

        align-items: center;
        justify-content: center;   
    }

`;

export const TimmerSection = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    span{
        color: ${props=>props.theme["gray-100"]};
        background-color: ${props=>props.theme["gray-700"]};
        border-radius: 8px;
        padding: 2.5rem 1rem;
        line-height: 8rem;
        font-family: 'Roboto Mono',monospace;
        font-weight: 700;
        font-size: 10rem;
    }
`;

export const Division = styled.div`

    display: flex;
    align-items: center;
    
    color: ${props=>props.theme["green-500"]};
    font-weight: 700;
    font-size: 10rem;
    line-height: 8rem;
    padding: 2.5rem 0;
    
`;
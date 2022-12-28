import styled from "styled-components";

export const HistoryContainer = styled.main`
    max-width: 58rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding-top: 3rem;

    h1{
        font-size: 1.5rem;
    }

    table{
        thead{
            background-color: ${props=>props.theme["gray-600"]};
            
        }
    }
`;
export const TextHeadInformation = styled.th`
    text-align: justify;
    padding: 1rem 1.5rem;
`;

export const Status = styled.td`

    display: flex;
    align-items: center;
    gap:0.5rem;

    &::before{
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: 1px solid ${props=>props.theme["green-500"]};
        background-color: ${props=>props.theme["green-500"]};

    }
`;

export const TableRowContainer = styled.tr`
    background-color: ${props=>props.theme["gray-700"]};

    td{
        padding: 1rem 1.5rem;
    }
`;
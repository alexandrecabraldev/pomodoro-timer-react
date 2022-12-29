import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding-top: 3rem;

    h1{
        font-size: 1.5rem;
    }

    table{
        //faz com que o espaçamento entre as linhas da tabela desapareçam
        border-collapse: collapse;

        thead{
            background-color: ${props=>props.theme["gray-600"]};
        }
    }
`;
export const TextHeadInformation = styled.th`
    text-align: left;
    padding: 1rem 1.5rem;
    background-color: ${props=>props.theme["gray-600"]};

    &:first-child{
        border-top-left-radius: 8px;
    }

    &:last-child{
        border-top-right-radius: 8px;
    }
`;


const ColorReferereceStatus={
    red:"red-500",
    yellow:"yellow-500",
    green: "green-500"
} as const 

interface PropsStatus{
    colorStatus: keyof typeof ColorReferereceStatus;
}


export const Status = styled.span<PropsStatus>`
    display: flex;
    align-items: center;
    gap:0.5rem;

    &::before{
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${props=>props.theme[ColorReferereceStatus[props.colorStatus]]};

    }
`;

export const TableRowContainer = styled.tr`
    background-color: ${props=>props.theme["gray-700"]};

    td{
        padding: 1rem 1.5rem;
        border-top: 4px solid ${props=>props.theme["gray-800"]};
    }
`;
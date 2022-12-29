import styled from "styled-components";

export const TextInformation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem; 
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;

    input[type="text"]{
        flex: 1;
        font-size: 1.125rem;

        &:focus{
            border-bottom-color: ${props=>props.theme["green-500"]};
        }
    }

    input[type="number"]{
        width: 4.5rem;
        &:focus{
            border-bottom-color: ${props=>props.theme["green-500"]};
        }
    }

    input{
        background-color: transparent;
        color: ${props=>props.theme["gray-500"]};
        border-right: none;
        padding: 0 0.5rem;

        font-weight: 700;
        font-size: 1rem;
        font-style: normal;

        &:focus{
            box-shadow: none;
        }
    }
`;

export const HomeStyle = styled.main`

    padding:4.6rem 0 9.8rem 0; 

    form{
        display: flex;
        gap: 3.5rem;
        flex-direction: column;

        align-items: center;
        justify-content: center; 

        button{
            border: none;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 0;
            box-shadow: none;
            width: 100%;
            background-color: ${props=>props.theme["green-500"]};
            color: ${props=>props.theme["gray-100"]};
            cursor: pointer;

            :not(:disabled):hover{
                background-color: ${props=>props.theme["green-700"]};
            }

            :disabled{
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }

`;

export const TimmerSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    font-family: 'Roboto Mono',monospace;
    font-size: 10rem;
    line-height: 8rem;
    font-weight: 700;
    color: ${props=>props.theme["gray-100"]};

    span{   
        background-color: ${props=>props.theme["gray-700"]};
        border-radius: 8px;
        padding: 2rem 1rem;
    }
`;

export const Division = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${props=>props.theme["green-500"]};
    font-weight: 700;
    font-size: 10rem;
    line-height: 8rem;
    padding: 2rem 0;

    width: 4rem;
    
`;
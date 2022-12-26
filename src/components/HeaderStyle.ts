import styled from "styled-components";

export const HeaderStyle = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;


    nav{
        display: flex;
        gap: 0.5rem;
        
    }

    a{
        color: ${props => props.theme["gray-100"]};
        
        width: 3rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        
        box-shadow:none;
        
        &:hover{
            border-bottom: 3px solid ${props=> props.theme["green-500"]};
        }

        &.active{
            color:${props=> props.theme["green-500"]};
        }

    }
    
`;
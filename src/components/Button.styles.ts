import styled, { css } from "styled-components";


export type ButtonVariant = "primary" | "secondary" | "danger" | "warning";

interface ButtonContainerProps{
    variant: ButtonVariant;
}

const buttonVariant = {
    primary: "green",
    secondary:"gray",
    warning: "orange",
    danger: "red"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 8px;
    margin-right: 10px;
    font-size: 1.2rem;
    color: white;
    background-color: ${props=>props.theme.primary} 

    /* ${
        props=> {
            return css`background-color: ${buttonVariant[props.variant]}`
        }
    } */
`;
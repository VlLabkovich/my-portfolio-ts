import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme";


export type ButtonPropsType = {
    btnType: string
}

export const Button = styled.button<ButtonPropsType>`
    //font-size: inherit;
    //font-weight: inherit;
    font-family: Montserrat, sans-serif;
    line-height: normal;
    position: relative;
    z-index: 0;
    padding: 12px 20px;
    color: ${Theme.colors.link};
    text-align: center;
    font-size: 16px;
    font-weight: 500;

    @media ${Theme.media.mobile} {
        font-size: 15px;
    }
    
    ${props => props.btnType === "primary" && css<ButtonPropsType>`
        &::before {
            content: "";
            display: inline-block;
            height: 6px;
            width: 50%;
            background-color: ${Theme.colors.accent};
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;

        }

        &:hover {
            &:before {
                display: inline-flex;
                height: 100%;
                width: 100%;
                border-radius: 6px;
                justify-content: center;
                align-items: center;
            }

            color: ${Theme.colors.link_hover};
        }
    `
    }

    ${props => props.btnType === "secondary" && css<ButtonPropsType>`
        text-align: center;
        margin-top: 22px;
        max-width: 532px;
        width: 100%;
        height: 48px;
        padding: 12px 20px;
        border-radius: 6px;
        background-color: ${Theme.colors.accent};
        color: ${Theme.colors.link_hover};
    `
    }
`
import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme";


export type ButtonPropsType = {
    btnType: string
    width?: string
    height?: string
    padding?: string
    marginTop?: string
}

export const Button = styled.button<ButtonPropsType>`
    font-family: 'Montserrat', sans-serif;
    line-height: normal;
    position: relative;
    z-index: 0;
    padding: 12px 20px;
    color: ${Theme.colors.link};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    
    ${props => props.btnType === "primary" && css<ButtonPropsType>`

        &::before {
            content: "";
            position: absolute;
            display: inline-block;
            height: 6px;
            width: 50%;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${Theme.colors.accent};
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
        margin-top: ${props => props.marginTop};
        max-width: ${props => props.width};
        width: 100%;
        padding: ${props => props.padding};
        border-radius: 6px;
        background-color: ${Theme.colors.accent};
        color: ${Theme.colors.link_hover};
        
        &:hover {
            color: ${Theme.colors.link_hover};
        }
        
        &:active {
            background-color: ${Theme.colors.btn_active} ;
        }
    `
    }

    ${props => props.btnType === "thirdly" && css<ButtonPropsType>`
        &:hover {
            &::before {
                content: "";
                position: absolute;
                display: inline-block;
                height: 6px;
                width: 50%;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: ${Theme.colors.accent};
                z-index: -1;
            }

            color: ${Theme.colors.btn_hover};
        }
    `
    }
`
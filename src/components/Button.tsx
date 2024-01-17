import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme";


export type ButtonPropsType = {
    btnType: string
}

export const Button = styled.button<ButtonPropsType>`
    text-align: center;
    font-size: inherit;
    font-style: normal;
    font-weight: inherit;
    line-height: normal;
    position: relative;
    z-index: 0;


    ${props => props.btnType === "primary" && css<ButtonPropsType>`
        &::before {
            content: "";
            display: inline-block;
            height: 10px;
            width: 50%;
            background-color: ${Theme.colors.accent};
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            //border-radius: 6px;
        }

        &:hover {
            &:before {
                display: inline-flex;
                padding: 12px 20px;
                height: 100%;
                width: 100%;
                border-radius: 6px;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            color: ${Theme.colors.link};
        }
    `
    }

    ${props => props.btnType === "secondary" && css<ButtonPropsType>`

    `
    }
`
import React from "react";
import styled, {css} from "styled-components";

export type MenuPropsType = {
    menuItems: Array<{
        text: string
        href: string
    }>
    StyledMenu: "primary" | "secondary"
}


export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu StyledMenu={props.StyledMenu} menuItems={props.menuItems}>
            <ul>
                {props.menuItems?.map((item, index) => {
                    return <li key={index}>
                        <a href={item.href}>{item.text}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>

    )
};

export const StyledMenu = styled.nav<MenuPropsType>`
    
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }


    ${props => props.StyledMenu === "primary" && css<MenuPropsType>`
        ul {
            gap: 45px;
        }

    `
    };

    ${props => props.StyledMenu === "secondary" && css<MenuPropsType>`
        ul {
            display: flex;
            gap: 48px;
            justify-content: space-around;
        }


        li {
            background-color: grey;
        }

        outline: 2px dashed red;
    `
    };
`


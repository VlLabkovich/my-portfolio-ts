import React from "react";
import styled, {css} from "styled-components";
import {Button, ButtonPropsType} from "./Button";

export type MenuPropsType = {
    menuItems: Array<{
        text: string
        href: string
        btnType: string
    }>
}


export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index} >
                        {/*<a href={item.href}>{item.text}</a>*/}
                        <Button btnType={item.btnType} as={"a"} href={item.href}>{item.text}</Button>
                    </li>
                })}
            </ul>
        </StyledMenu>

    )
};

export const StyledMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 45px;
    }

`


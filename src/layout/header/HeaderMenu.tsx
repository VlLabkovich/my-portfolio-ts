import React from "react";
import styled, {css} from "styled-components";
import {Button} from "../../components/Button";

export type MenuPropsType = {
    menuItems: Array<{
        text: string
        href: string
        btnType: string
    }>
}


export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index} >
                        {/*<a href={item.href}>{item.text}</a>*/}
                        <Button btnType={item.btnType} as={"a"} href={item.href}>{item.text}</Button>
                    </li>
                })}
            </ul>
        </StyledHeaderMenu>

    )
};

export const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }

`


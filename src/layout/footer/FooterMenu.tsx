import React from 'react';
import styled from "styled-components";
import {Button} from "../../components/Button";

export type MenuPropsType = {
    menuItems: Array<{
        text: string
        href: string
        btnType: string
    }>
}

export const FooterMenu = (props: MenuPropsType) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <Button btnType={item.btnType} as={"a"} href={item.href}>{item.text}</Button>
                    </li>
                })}
            </ul>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 48px;
        padding: 49px 0;
    }
`
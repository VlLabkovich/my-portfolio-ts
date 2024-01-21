import React from "react";
import styled, {css} from "styled-components";
import {Button} from "../../components/Button";
import {Theme} from "../../styles/Theme";

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
            <ListMenu>
                {props.menuItems.map((item, index) => {
                    return <ListItems key={index}>
                        <Button btnType={item.btnType} as={"a"} href={item.href}>{item.text}</Button>
                    </ListItems>
                })}
            </ListMenu>
        </StyledHeaderMenu>
    )
};

export const StyledHeaderMenu = styled.nav`

`

const ListMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin: 39px 0 41px;
    
    @media ${Theme.media.mobile} {
        margin: 27px 0;
        gap: normal;
    }

`

const ListItems = styled.li`
 
`


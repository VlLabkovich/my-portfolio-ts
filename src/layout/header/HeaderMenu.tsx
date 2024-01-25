import React from "react";
import styled, {css} from "styled-components";
import {Button} from "../../components/Button";
import {Theme} from "../../styles/Theme";
import {Link} from "react-scroll";

export type MenuPropsType = {
    menuItems: Array<{
        text: string
        href: string
        btnType: string
        fontSize?: string
    }>
}


export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ListMenu>
                {props.menuItems.map((item, index) => {
                    return <ListItems key={index}>
                        <Button fontSize={'15px'} btnType={item.btnType} as={Link} smooth={true} to={item.href}>{item.text}</Button>
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

    @media ${Theme.media.mobile} {
        padding: 27px 0;
        gap: normal;
    }

`

const ListItems = styled.li`
 
`


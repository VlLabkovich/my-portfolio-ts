import React from 'react';
import styled from "styled-components";
import {Button} from "../../components/Button";
import {Link} from "react-scroll";

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
            <ListMenu>
                {props.menuItems.map((item, index) => {
                    return <ListItems key={index}>
                        <Button btnType={item.btnType} as={Link} smooth={true} to={item.href}>{item.text}</Button>
                    </ListItems>
                })}
            </ListMenu>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
`

const ListMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 49px 0;
`

const ListItems = styled.li`
`
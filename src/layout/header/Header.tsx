import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu";

const itemsHeader = [
    {
        text: 'Skills',
        href: '#',
        btnType: '#'
    }, {
        text: 'Projects',
        href: '#',
        btnType: '#'
    }, {
        text: 'Contact',
        href: '#',
        btnType: 'primary'
    },
];

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={itemsHeader}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    min-height: 100px;
`

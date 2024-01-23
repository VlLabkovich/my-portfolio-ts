import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu";
import {Theme} from "../../styles/Theme";

const itemsHeader = [
    {
        text: 'Skills',
        href: '#skills',
        btnType: '#'
    }, {
        text: 'Projects',
        href: '#projects',
        btnType: '#'
    }, {
        text: 'Contact',
        href: '#contacts',
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
    position: relative;

    display: flex;
    min-height: 100px;
    @media ${Theme.media.mobile} {
        gap: 0;
    }
`

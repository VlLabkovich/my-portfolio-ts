import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/Menu";

const itemsHeader = [
    {
        text: 'Skills',
        href: '#'
    }, {
        text: 'Projects',
        href: '#'
    }, {
        text: 'Contact',
        href: '#'
    },
];

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={itemsHeader} StyledMenu={"primary"}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    min-height: 100px;
`

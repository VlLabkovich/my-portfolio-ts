import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {Menu} from "../../components/Menu";


const itemsFooter = [
    {
        text: 'Projects',
        href: '#',
        btnType: 'secondary'
    }, {
        text: 'Contact',
        href: '#',
        btnType: 'secondary'
    },
];

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                    <StyledFooterIcon>
                        <a href="">
                            <Icon iconId={'gmail'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                            <StyledTitle>gmail</StyledTitle>
                        </a>
                        <a href="">
                            <Icon iconId={'linkedin'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                            <StyledTitle>linkedin</StyledTitle>
                        </a>
                        <a href="">
                            <Icon iconId={'github'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                            <StyledTitle>linkedin</StyledTitle>
                        </a>
                    </StyledFooterIcon>
                    <Menu menuItems={itemsFooter}/>
                    <Copyright>© 2024 Labkovich Vladislav, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;

    a {
        text-decoration: none;
    }

    span {
        display: block;
    }
`

const StyledFooterIcon = styled.div`
    display: flex;
    gap: 95px;
`

const StyledTitle = styled.span`
`

const Copyright = styled.small`
`
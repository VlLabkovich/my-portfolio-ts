import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {FooterMenu} from "./FooterMenu";
import {Theme} from "../../styles/Theme";


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
                        <a href="https://gmail.com" title='labkovich.vl@gmail.com'>
                            <Icon iconId={'gmail'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                            <StyledTitle>gmail</StyledTitle>
                        </a>

                        <a href="">
                            <Icon iconId={'linkedin'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                            <StyledTitle>linkedin</StyledTitle>
                        </a>
                        <a href="">
                            <Icon iconId={'github'} width={'39'} height={'38'} viewBox={'0 0 39 38'}/>
                            <StyledTitle>github</StyledTitle>
                        </a>
                    </StyledFooterIcon>
                    <FooterMenu menuItems={itemsFooter}/>
                    <Copyright>© 2024 Labkovich Vladislav, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;

    span {
        display: block;
    }
`

const StyledFooterIcon = styled.div`
    display: flex;
    gap: 95px;
`

const StyledTitle = styled.span`
    color: ${Theme.colors.text};
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 11.105px; /* 92.544% */
    letter-spacing: 1.44px;
    text-transform: uppercase;
    padding-top: 9.5px;
`

const Copyright = styled.small`
    color: ${Theme.colors.text};
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px; /* 185.714% */
    letter-spacing: 0.56px;
`
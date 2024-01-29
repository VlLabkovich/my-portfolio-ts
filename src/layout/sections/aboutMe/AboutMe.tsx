import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";

export const AboutMe: React.FC = () => {
    return (
        <StyledAboutMe>
            <Container>
                <StyledContent>
                    <FlexWrapper direction={'column'}>
                        <SectionTitle>About Me</SectionTitle>
                        <Text>Hello, I'm a beginner web-developer. I enjoy creating user interfaces and web applications that are relevant to users. I use the following technologies: HTML, CSS, JavaScript, ReactJS and TypeScript. Now I am improving my skills and expanding them with new knowledge. These are the skills that I have:</Text>
                    </FlexWrapper>
                </StyledContent>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    position: relative;
    background-color: ${Theme.colors.bgColor};
    padding: 120px 0 140px;
`

const StyledContent = styled.div`
    max-width: 843px;
    width: 100%;
    padding-left: 17px;
    
    @media ${Theme.media.desktop} {
        padding-left: 17px;
    }

`

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.72px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 5px;
        height: Calc(100% - 5px);
        border-radius: 2px;
        left: -17px;
        background-color: ${Theme.colors.accent};
`
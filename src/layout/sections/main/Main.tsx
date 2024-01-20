import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    <MainContent>
                        <MainTitle>FRONT-END DEVELOPER</MainTitle>
                        <Name>Vladislav Labkovich</Name>
                        <Text>I’m Vladislav Labkovich, a developer dedicated to making the world a better place one line
                            of code at a time.
                        </Text>
                        <Button as={"a"} btnType={'primary'} href={'#contacts'} title={'labkovich.vl@gmail.com'}>Contact Me</Button>
                    </MainContent>
                    <Photo src={photo}></Photo>
                    <StyledScrollLink>
                        <a href="#footer">
                            <Icon iconId={'scroll'} width="32" height="32" viewBox="0 0 32 32"/>
                        </a>
                    </StyledScrollLink>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
`

const MainContent = styled.div`
    max-width: 520px;
    height: 278px;
    margin-top: 40px;
    //outline: 3px solid red;
`

const MainTitle = styled.h1`
    color: ${Theme.colors.font};
    font-family: Tinos, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    padding: 0 253px 10px 6px;
`

const Name = styled.h2`
    color: ${Theme.colors.accent};
    font-size: 62px;
    font-weight: 600;
    line-height: normal;
`

const Text = styled.p`
    color:  ${Theme.colors.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
    padding: 11px 0 29px 6px;
`

const Photo = styled.img`
    width: 355px;
    height: 482px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 40px;
`
const StyledScrollLink = styled.a`
    position: absolute;
    top: 92%;
    left: 50%;
`
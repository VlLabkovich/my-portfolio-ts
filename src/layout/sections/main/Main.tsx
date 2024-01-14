import React from 'react';
import styled, {StyleSheetManager} from "styled-components";
import photo from "../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/Button";

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
                        <Button type={'submit'}>Contact Me</Button>
                    </MainContent>
                    <Photo src={photo}></Photo>
                    <StyledScrollLink>
                        <a href="#">
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
    width: 520px;
    min-height: 278px;
    //outline: 3px solid red;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`

const Text = styled.p`

`

const Photo = styled.img`
    width: 355px;
    height: 482px;
    object-fit: cover;
    border-radius: 10px;
`
const StyledScrollLink = styled.a`
    position: absolute;
    top: 90%;
    left: 50%;
`
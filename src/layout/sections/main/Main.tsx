import React from 'react';
import styled, {StyleSheetManager} from "styled-components";
import photo from "../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <MainContent>
                        <MainTitle>FRONT-END DEVELOPER</MainTitle>
                        <Name>Vladislav Labkovich</Name>
                        <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt.</Text>
                        <StyledButton>Contact Me</StyledButton>
                    </MainContent>
                    <Photo src={photo}></Photo>
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
    height: 278px;
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

const StyledButton = styled.button`

`

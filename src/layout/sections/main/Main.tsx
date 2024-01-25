import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {Link} from "react-scroll";
import {animateScroll as scroll} from 'react-scroll'

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'centr'}  wrap={'wrap'}>
                    <MainContent>
                        <MainTitle>
                            <p>FRONT-END DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['FRONT-END DEVELOPER', 'WEB-DEVELOPER', 'REACT-DEVELOPER',],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </MainTitle>
                        <Name>Vladislav Labkovich</Name>
                        <Text>I’m Vladislav Labkovich, a developer dedicated to making the world a better place one line
                            of code at a time.
                        </Text>
                        <Button btnType={'primary'} as={(Link)} smooth={true} to={`contacts`} title={'labkovich.vl@gmail.com'}>Contact
                            Me</Button>

                    </MainContent>
                    <Photo src={photo}></Photo>
                    <StyledScrollLink>
                        <a onClick={()=>{scroll.scrollToBottom()}}>
                            <Icon iconId={'scroll'} width="32" height="32" viewBox="0 0 32 32"/>
                        </a>
                    </StyledScrollLink>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    align-items: center;
    min-height: 85vh;
    position: relative;
    
    @media ${Theme.media.tablet} {

        ${FlexWrapper} {
            padding-top: 20px;
            justify-content: center;
            align-items: center;
            flex-direction: column-reverse;
        }


        @media ${Theme.media.mobile} {
            padding-top: 20px;
            ${FlexWrapper} {
                justify-content: center;
                align-items: center;
                flex-direction: column-reverse;
            }

        }
`

const MainContent = styled.div`
    max-width: 520px;
    width: 100%;
    min-height: 278px;

    @media ${Theme.media.tablet} {
        max-width: 329px;
        width: 100%;
        text-align: center;
    }

    @media ${Theme.media.mobile} {
        max-width: 329px;
        width: 100%;
        text-align: center;
    }

`

const MainTitle = styled.h1`
    color: ${Theme.colors.font};
    font-family: Tinos, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    margin: 0 253px 10px 6px;
    white-space: nowrap;

    p {
        display: none;
    }

    @media ${Theme.media.tablet} {
        text-align: center;
        margin: 40px 0 10px 0;
    }

    @media ${Theme.media.mobile} {
        text-align: center;
        margin-top: 63px;
    }
`

const Name = styled.h2`
    color: ${Theme.colors.accent};
    font-size: 62px;
    font-weight: 600;
    line-height: normal;

    @media ${Theme.media.tablet} {
        text-align: center;
        font-size: 60px;
    }

    @media ${Theme.media.mobile} {
        text-align: center;
        font-size: 40px;
        line-height: 40px;
        margin: 12px 0 16px;
    }
`

const Text = styled.p`
    max-width: 520px;
    color: ${Theme.colors.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
    margin: 10px 0 28px 6px;

    @media ${Theme.media.tablet} {
        text-align: center;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: auto;
        margin: 0 0 16px 0;
    }

    @media ${Theme.media.mobile} {
        text-align: center;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: auto;
        margin: 0 0 16px 0;
    }
`

const Photo = styled.img`
    width: 355px;
    height: 482px;
    object-fit: cover;
    border-radius: 10px;
  

    @media ${Theme.media.mobile} {
        width: unset;
    }
`
const StyledScrollLink = styled.a`
    position: absolute;
    left: 50%;
    bottom: 1%;

    @media ${Theme.media.desktop} {
        display: none;
    }
`
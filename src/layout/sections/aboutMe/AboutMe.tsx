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
                        <Text>The long barrow was built on land previously inhabited in the Mesolithic period. It
                            consisted
                            of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length,
                            with
                            a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human
                            remains were placed within this chamber during the Neolithic period, representing at least
                            nine
                            or ten individuals.</Text>
                    </FlexWrapper>
                </StyledContent>
            </Container>

        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    margin-top: 356px;
    
    @media ${Theme.media.tablet} {
        margin-top: 72px;
    }
`

const StyledContent = styled.div`
    max-width: 843px;
    width: 100%;
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
    }
`
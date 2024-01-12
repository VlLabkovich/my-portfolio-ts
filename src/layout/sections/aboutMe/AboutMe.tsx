import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const AboutMe: React.FC = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <FlexWrapper>
                    <Text>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted
                        of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with
                        a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human
                        remains were placed within this chamber during the Neolithic period, representing at least nine
                        or ten individuals.</Text>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 100%;
`
const Text = styled.p`
position: relative;
    
    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 120px;
        height: 5px;
        left: -76.5px;
        transform: rotate(-90deg);
        border-radius: 2px;
        background: #5222D0;
    }
    
`
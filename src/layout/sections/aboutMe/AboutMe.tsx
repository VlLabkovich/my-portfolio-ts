import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";

export const AboutMe: React.FC = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <Text>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</Text>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
min-height: 100vh;
`
const Text = styled.p`

`
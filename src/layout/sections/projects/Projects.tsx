import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import ProjectOne from "../../../assets/images/social network.webp"
import ProjectSecond from "../../../assets/images/sendpay.png"
import ProjectThree from "../../../assets/images/e-commerce.png"
import ProjectFour from "../../../assets/images/beats lerning.png"

export const Projects: React.FC = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>My Projects</SectionTitle>
                <FlexWrapper wrap={'wrap'} gap={'27px'} justify={'center'}>
                    <Project image={ProjectOne} title={'Social Network'} tagFirst={'JavaScript'} tagSecond={'PostgreSQL'} tagThree={'React'} tagFour={'redux'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
                    <Project image={ProjectSecond} title={'SendPay Platform'} tagFirst={'JavaScript'} tagSecond={'React Native'} tagThree={'Redux'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
                    <Project image={ProjectThree} title={'E-commerce'} tagFirst={'JavaScript'} tagSecond={'React Native'} tagThree={'PostgreSQL'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
                    <Project image={ProjectFour} title={'BeatsLerning'} tagFirst={'JavaScript'} tagSecond={'React Native'} tagThree={'redux'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`
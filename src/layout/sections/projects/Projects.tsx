import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import socialImg from "../../../assets/images/social network.webp"
import sendPayImg from "../../../assets/images/sendpay.png"
import ecommerceImg from "../../../assets/images/e-commerce.png"
import beatsLerningImg from "../../../assets/images/beats lerning.png"


const workProjects = [
    {
        src: socialImg,
        title: 'Social Network',
        tags: ['JavaScript', 'PostgreSQL', 'React', 'Redux'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
    {
        src: sendPayImg,
        title: 'SendPay Platform',
        tags: ['JavaScript', 'Redux'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
    {
        src: ecommerceImg,
        title: 'E-commerce',
        tags: ['JavaScript', 'Redux', 'Redis'],
        text: 'Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
    {
        src: beatsLerningImg,
        title: 'Beats Lerning',
        tags: ['JavaScript', 'TypeScript', 'Redux', 'MongoDB'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
];

export const Projects: React.FC = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap={'wrap'} rowGap={'43px'} columnGap={'27px'} justify={'center'}>
                    {workProjects.map((w) => {
                        return <Project image={w.src}
                                        title={w.title}
                                        tags={w.tags}
                                        text={w.text}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    margin-bottom: 140px;
`
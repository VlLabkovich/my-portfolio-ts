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
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";


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
        <StyledProjectsContent id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <StyledContent>
                    {workProjects.map((w) => {
                        return <Project image={w.src}
                                        title={w.title}
                                        tags={w.tags}
                                        text={w.text}
                        />
                    })}

                    <Button width={'305px'} height={'56px'} padding={'12px 20px 13px 20px'} marginTop={'20px'}
                            btnType={'secondary'} as={'a'} type={'button'}>SEE ALL PROJECTS</Button>
                </StyledContent>
            </Container>
        </StyledProjectsContent>
    );
};

const StyledProjectsContent = styled.section`
    margin-bottom: 140px;
`

const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 43px;
    column-gap: 27px;

    @media ${Theme.media.mobile} {
        row-gap: 16px;
        column-gap: 0;
    }

    ${Button} {
        display: none;

        @media ${Theme.media.mobile} {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
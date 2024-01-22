import React, {useState} from 'react';
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
        tags: ['React', 'Redux', 'MongoDB'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
    {
        src: ecommerceImg,
        title: 'E-commerce',
        tags: ['React', 'Redux', 'Redis'],
        text: 'Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
    {
        src: beatsLerningImg,
        title: 'Beats Lerning',
        tags: ['React', 'TypeScript', 'Redux', 'MongoDB'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'

    },
];


export const Projects: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const defaultShow = 2;
    const showAllByDefault = workProjects.length <= defaultShow;

    const projectsToShow = (showAll || showAllByDefault) ? workProjects : workProjects.slice(0, defaultShow);

    return (
        <StyledProjectsContent id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                {/*<FlexWrapper justify={'center'} wrap={'wrap'}>*/}
                <StyledContent>
                    {projectsToShow.map((w) => {
                        return <Project image={w.src}
                                        title={w.title}
                                        tags={w.tags}
                                        text={w.text}
                        />
                    })}
                </StyledContent>

                    {
                        showAllByDefault ? null :
                            <Button onClick={() => setShowAll(val => !val)} width={'305px'} height={'56px'}
                                    padding={'12px 20px 13px 20px'} marginTop={'20px'}
                                    btnType={'secondary'} as={'a'}
                                    type={'button'}>{showAll ? 'HIDE PROJECTS' : 'SEE ALL PROJECTS'}</Button>
                    }

                {/*</FlexWrapper>*/}
            </Container>
        </StyledProjectsContent>
    );
};

const StyledProjectsContent = styled.section`
    
    ${Button} {
        margin: 36px auto 140px;

    }


    @media ${Theme.media.mobile} {
        margin-bottom: 177px;
    }

        // ${FlexWrapper} {
    //     row-gap: 43px;
    //     column-gap: 27px;
    //
        //     @media ${Theme.media.mobile} {
    //         row-gap: 16px;
    //         column-gap: 0;
    //     }
    // }

    @media ${Theme.media.mobile} {

    }
`

const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 43px;
    column-gap: 27px;

    @media ${Theme.media.desktop} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media ${Theme.media.mobile} {
        row-gap: 16px;
        column-gap: 0;
    }

    ${Button} {
        display: flex;
        justify-content: center;
        align-items: center;

        @media ${Theme.media.mobile} {
            justify-content: center;
            align-items: center;
        }
    }
`
import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {workProjects} from "./WorkData";

export const Projects: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const defaultShow = 2;
    const showAllByDefault = workProjects.length <= defaultShow;

    const projectsToShow = (showAll || showAllByDefault) ? workProjects : workProjects.slice(0, defaultShow);

    return (
        <StyledProjectsContent id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                {/*<FlexWrapper justify={'center'} wrap={'wrap'}>*/}
                <StyledContent>
                    {projectsToShow.map((p) => {
                        return <Project image={p.src}
                                        title={p.title}
                                        tags={p.tags}
                                        text={p.text}
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
    position: relative;
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
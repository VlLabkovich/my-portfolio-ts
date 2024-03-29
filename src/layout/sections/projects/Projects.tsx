import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {workProjects} from "./WorkData";
import {Fade} from "react-awesome-reveal";

export const Projects: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const defaultShow = 2;
    const showAllByDefault = workProjects.length <= defaultShow;

    const projectsToShow = (showAll || showAllByDefault) ? workProjects : workProjects.slice(0, defaultShow);

    return (
        <StyledProjectsContent id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>

                <StyledContent>
                    <Fade>
                        {projectsToShow.map((p) => {
                            return <Project image={p.src}
                                            title={p.title}
                                            tags={p.tags}
                                            text={p.text}
                            />
                        })}
                    </Fade>
                </StyledContent>
                <FlexWrapper justify={'center'}>
                    {
                        showAllByDefault ? null :
                            <Button onClick={() => setShowAll(val => !val)}
                                    width={'305px'}
                                    btnType={'secondary'} as={'a'}
                                    type={'button'}>{showAll ? 'HIDE PROJECTS' : 'SEE ALL PROJECTS'}</Button>
                    }
                </FlexWrapper>
            </Container>
        </StyledProjectsContent>
    );
};

const StyledProjectsContent = styled.section`
    position: relative;
    padding-bottom: 140px;
    background-color: ${Theme.colors.bgColor};
}

`

const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
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
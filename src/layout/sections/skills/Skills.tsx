import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";
import {skillData} from "./SkillData";
import {Fade} from "react-awesome-reveal";

export const Skills: React.FC = () => {
    return (
        <StyledSkillsContent id={"skills"}>
            <Container>
                <SectionTitle>Tech Skills</SectionTitle>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s) => {
                            return <Skill iconId={s.iconId}
                                          title={s.title}
                                          width={s.width}
                                          height={s.height}
                                          viewBox={s.viewBox}
                            />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledSkillsContent>
    );
};

const StyledSkillsContent = styled.section`
    background-color: ${Theme.colors.bgColor};
    position: relative;
    padding-bottom: 140px;
    
    ${FlexWrapper} {
        row-gap: 59px;
        column-gap: 120px;

        @media ${Theme.media.tablet} {
            column-gap: 90px;
            row-gap: 80px;
        }
        @media ${Theme.media.mobile} {
            column-gap: 12px;
            row-gap: 40px;
        }
    }
`
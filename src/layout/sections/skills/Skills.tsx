import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";

export const Skills: React.FC = () => {
    return (
        <StyledSkillsContent id="skills">
            <Container>
                <SectionTitle>Tech Skills</SectionTitle>
                    <StyledSkills>
                        <Skill iconId={'vscode'} viewBox={'0 0 112 112'}
                               title={'VS-CODE'}/>
                        <Skill iconId={'html'}
                               title={'HTML'}/>
                        <Skill iconId={'css3'}
                               title={'CSS3'}/>
                        <Skill iconId={'js'}
                               title={'JAVASCRIPT'}/>
                        <Skill iconId={'ts'} width={'105'}
                               title={'TYPESCRIPT'}/>
                        <Skill iconId={'react'}
                               title={'REACT JS'}/>
                        <Skill iconId={'sc'}
                               title={'STYLED COMPONENTS'}/>
                        <Skill iconId={'bootstrap'}
                               width={'88'}
                               height={'120'}
                               viewBox={'0 0 88 88'}
                               title={'BOOTSTRAP'}/>
                        <Skill iconId={'docker'} viewBox={'-10 10 130 100'}
                               title={'DOCKER'}/>
                        <Skill iconId={'figma'} viewBox={'0 0 100 100'}
                               title={'FIGMA'}/>
                        <Skill iconId={'git'} viewBox={'-6 -4 117 102'}
                               title={'GIT'}/>
                        <Skill iconId={'gitHub'} viewBox={'0 -10 86 95'}
                               title={'GITHUB'}/>
                    </StyledSkills>
            </Container>
        </StyledSkillsContent>
    );
};

const StyledSkillsContent = styled.section`
    margin: 140px 0;
`

const StyledSkills = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 59px;
    column-gap: 120px;
    
    @media ${Theme.media.mobile} {
        column-gap: 48px;
        row-gap: 80px;
    }
`
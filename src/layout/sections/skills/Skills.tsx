import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";

export const Skills: React.FC = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Tech Skills</SectionTitle>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'} gap={'120px'}>
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
                        <Skill iconId={'git'} viewBox={'-6 -4 117 102'}
                               title={'GIT'}/>
                        <Skill iconId={'gitHub'} viewBox={'0 -10 86 95'}
                               title={'GITHUB'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    margin: 140px 0;
`
import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";

export const Skills: React.FC = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify={'center'} align={'center'} wrap={'wrap'}>
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
                    <Skill iconId={'docker'} width={'120'} height={'120'} viewBox={'-10 10 130 100'}
                           title={'DOCKER'}/>
                    <Skill iconId={'git'} width={'109'} height={'120'} viewBox={'0 0 108 97'}
                           title={'GIT'}/>
                    <Skill iconId={'gitHub'} width={'120'} height={'120'} viewBox={'0 -10 86 95'}
                           title={'GITHUB'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`
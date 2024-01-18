import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    title: string

}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'} gap={'10px'}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 10%;
    height: 155px;
`

const SkillTitle = styled.h3`
    color: ${Theme.colors.text}
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.166px;
    text-transform: uppercase;
`
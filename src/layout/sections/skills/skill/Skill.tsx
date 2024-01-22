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
        <StyledSkillContent>
                <StyledSkill>
                    <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                    <SkillTitle>{props.title}</SkillTitle>
                </StyledSkill>
        </StyledSkillContent>
    );
};

const StyledSkillContent = styled.div`
    width: 120px;
    height: 164px;

    @media ${Theme.media.mobile} {
        width: 80px;
        height: 120px;
    }
`

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media ${Theme.media.mobile} {
        gap: 15px;
    }
`

const SkillTitle = styled.h3`
    color: ${Theme.colors.text}
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.166px;
    text-transform: uppercase;
    white-space: pre-wrap;
    
    @media ${Theme.media.mobile} {
        font-size: 12px;
        letter-spacing: 1.6px;
    }
`
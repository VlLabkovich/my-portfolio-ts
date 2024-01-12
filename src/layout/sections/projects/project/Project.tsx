import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    image: string
    title: string
    tagFirst?: string
    tagSecond?: string
    tagThree?: string
    tagFour?: string
    text?: string

}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={'column'}>
                <StyledProjectImg src={props.image}/>
                <StyledContent>
                    <Title>{props.title}</Title>
                    <StyledTags>
                        <Tags>{props.tagFirst}</Tags>
                        <Tags>{props.tagSecond}</Tags>
                        <Tags>{props.tagThree}</Tags>
                        <Tags>{props.tagFour}</Tags>
                    </StyledTags>
                    <Text>{props.text}</Text>
                </StyledContent>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 522px;
    width: 100%;
    height: 636px;
    box-shadow: 2px 2px 32px 0px rgba(40, 38, 44, 0.15);
    border-radius: 6px;

`

const StyledProjectImg = styled.img`
    width: 100%;
    height: 388px;
    object-fit: contain;
`

const Title = styled.h3`

`

const StyledContent = styled.div`
    //outline: 3px dashed grey;
    margin-left: 26px;
`

const StyledTags = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
`

const Tags = styled.span`

    color: #DBFFFF;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #5222D0;
`

const Text = styled.p`
    //outline: 3px solid brown;
`
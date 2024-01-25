import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";

type ProjectPropsType = {
    image: string
    title: string
    tags: Array<string>
    text: string

}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={'column'}>
                <StyledProjectImg src={props.image}/>
                <StyledContent>
                    <Title>{props.title}</Title>
                    <StyledTags>{props.tags.map((item, index) => {
                        return <Tags key={index}>
                            {item}
                        </Tags>
                    })}
                    </StyledTags>
                    <Text>{props.text}</Text>
                </StyledContent>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: white;
    position: relative;
    max-width: 522px;
    min-height: 636px;
    box-shadow: 2px 2px 32px 0 rgba(40, 38, 44, 0.15);
    border-radius: 6px;
    
    @media ${Theme.media.desktop} {
        max-width: 522px;
        min-height: unset;
    }
    
    @media ${Theme.media.mobile} {
        max-width: 384px;
        min-height: unset;
    }
    

`

const StyledProjectImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Title = styled.h3``

const StyledContent = styled.div`
    padding: 28px 10px 32px 26px;

    @media ${Theme.media.mobile} {
        padding: 16px 8px 20px 18px;
    }
`

const StyledTags = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 10px 0 20px;
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

`
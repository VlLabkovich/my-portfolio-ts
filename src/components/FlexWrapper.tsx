import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    rowGap?: string
    columnGap?: string

}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "no wrap"};
    gap: ${props => props.gap};
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
    height: 100%;
`


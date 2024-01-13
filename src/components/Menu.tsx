import styled from "styled-components";
import React from "react";

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 50px;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    padding-right: 15px;
    //outline: 3px dotted brown;
`

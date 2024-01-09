import React from 'react';
import styled from "styled-components";

export const HeaderMenu: React.FC = () => {
    return (
        <StyledMenu>
            <nav>
                <ul>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: 50px;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    padding-right: 15px;
`
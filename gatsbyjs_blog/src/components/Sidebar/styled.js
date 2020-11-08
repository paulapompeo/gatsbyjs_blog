import styled from 'styled-components';
import media from "styled-media-query";

export const SidebarWrapper = styled.aside`
    align-items: center;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: fixed;
    padding: 2rem;
    text-align: center;
    width: 20rem;

    ${media.lessThan("large")`
        align-items: flex-start;
        height: auto;
        padding: 1rem 2rem;
        width: 100%;
    `}
`;
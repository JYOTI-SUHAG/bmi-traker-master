import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const CopyrightContainer = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: rgb(130, 130, 130);
    line-height: 2rem;
    font-size: 0.9rem;
    box-sizing: border-box;
    padding: 0.5rem;
    a {
        text-decoration: none;
        font-weight: bold;
    }
`;

const bgcolor = keyframes`
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
`;

const ColoredText = styled.span`
    white-space: nowrap;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 500% 500%;
    -webkit-animation: ${bgcolor} 5s ease infinite;
    -moz-animation: ${bgcolor} 5s ease infinite;
    animation: ${bgcolor} 5s ease infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default function Copyright({ appName, developer, developerUrl }) {
    return (
        <CopyrightContainer>
            <p>
                Copyright &copy; {appName}
                <script>document.write(new Date().getFullYear());</script> |
                This website is developed by{" "}
                <a href={developerUrl}>
                    <ColoredText>{developer}</ColoredText>
                </a>
            </p>
        </CopyrightContainer>
    );
}

Copyright.propTypes = {
    appName: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    developerUrl: PropTypes.string.isRequired,
};

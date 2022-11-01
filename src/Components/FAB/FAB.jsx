import React, { useState } from "react";
import styled from "styled-components";

const FABContainer = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1.5rem;
    // left: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    max-width: 300px;
    z-index: 1;
`;

const FABButton = styled.div`
    border-radius: 50%;
    height: 2.5rem;
    margin-bottom: 1rem;
    line-height: 2.5rem;
    font-size: 2rem;
    width: 2.5rem;
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    text-align: center;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.25),
        -1px -1px 6px 2px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
    color: white;
    transform: scale(1.2, 1.2);

    &:active {
        transform: scale(1, 1);
        box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.25),
            -1px -1px 6px 3px rgba(0, 0, 0, 0.22);
    }
`;

const Message = styled.div`
    padding: 1rem;
    padding-left: 2rem;
    background-color: #734b6d;
    border: 1px solid white;
    border-radius: 25px;
    border-bottom-right-radius: 0px;
    ul {
        list-style: none;
    }
    li:before {
        content: "";
        width: 15px;
        height: 15px;
        display: block;
        background: #ffffff;
        position: relative;
        left: -20px;
        top: 20px;
        border-radius: 33% 67% 65% 35% / 46% 62% 38% 54%;
    }
`;

export default function FAB() {
    const [fabContentVisible, setFabContentVisible] = useState(false);
    const toggleVisibility = () => {
        setFabContentVisible(!fabContentVisible);
    };
    return (
        <FABContainer>
            {fabContentVisible && (
                <Message>
                    <ul>
                        <li>You can store records for 7 days.</li>
                        <li>
                            For a particular day, only the latest record of the
                            day will be stored.
                        </li>
                    </ul>
                </Message>
            )}
            <FABButton onClick={toggleVisibility}>?</FABButton>
        </FABContainer>
    );
}

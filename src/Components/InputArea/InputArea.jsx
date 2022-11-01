import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "../RangeSlider";

const InputContainer = styled.div`
    padding: 4rem 0;
`;

const Sliders = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
`;

const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    place-items: center;
`;

const StyledButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.25),
        -1px -1px 6px 2px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
    color: white;
    transform: scale(1.1, 1.1);

    &:active {
        transform: scale(1, 1);
        box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.25),
            -1px -1px 6px 3px rgba(0, 0, 0, 0.22);
    }
`;

export default function InputArea({ setOutput }) {
    const [weight, setWeight] = useState(1);
    const [height, setHeight] = useState(50);

    const updateHeight = (e) => {
        const newHeight = e.target.value;
        setHeight(newHeight);
    };

    const updateWeight = (e) => {
        const newWeight = e.target.value;
        setWeight(newWeight);
    };

    const calculateBMI = () => {
        setOutput({ weight: Number(weight), height: Number(height) });
    };

    return (
        <InputContainer>
            <Sliders>
                <RangeSlider
                    label="Weight"
                    min={1}
                    max={150}
                    unit="KG"
                    onChange={updateWeight}
                />
                <RangeSlider
                    label="Height"
                    min={50}
                    max={250}
                    unit="cm"
                    onChange={updateHeight}
                />
            </Sliders>
            <ButtonContainer>
                <StyledButton type="submit" onClick={calculateBMI}>
                    Calculate BMI
                </StyledButton>
            </ButtonContainer>
        </InputContainer>
    );
}

InputArea.propTypes = {
    setOutput: PropTypes.func.isRequired,
};

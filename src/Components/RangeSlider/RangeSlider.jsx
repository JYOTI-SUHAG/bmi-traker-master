import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
`;

const Slider = styled.div`
    width: 300px;
`;

const ChoosenValue = styled.span`
    display: block;
    width: 2.75rem;
    height: 2.75rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 50%;
    text-align: center;
    border: 2px solid #ffffff;
    font-size: 1.5rem;
    p {
        font-size: 1rem;
    }
`;

const SliderInput = styled.input`
    margin-top: 2rem;
    width: 100%;
    -webkit-appearance: none;
    &:focus {
        outline: none;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        box-shadow: none;
        background: #ffffff;
        border-radius: 0px;
        border: 0px solid #010101;
    }
    &::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        box-shadow: none;
        background: #ffffff;
        border-radius: 0px;
        border: 0px solid #010101;
    }

    &::-webkit-slider-thumb {
        box-shadow: none;
        border: 0px solid #ffffff;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        height: calc(2.4rem + 1px);
        width: 1.2rem;
        border-radius: 1.2rem;
        background-color: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -1.2rem;
    }
    &::-moz-range-thumb {
        box-shadow: none;
        border: 0px solid #ffffff;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        height: calc(2.4rem + 1px);
        width: 1.2rem;
        border-radius: 1.2rem;
        background-color: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -1.2rem;
    }
    &::-moz-focus-outer {
        border: 0;
    }
`;

const LabelAndRange = styled.div`
    margin-top: 1.2rem;
    width: 300px;
    display: flex;
    justify-content: space-between;
`;
export default function RangeSlider({ label, min, max, unit, onChange }) {
    const [value, setValue] = useState(min);

    const updateValue = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <Container>
            <Slider>
                <ChoosenValue>
                    {value}
                    <br />
                    <p>{unit}</p>
                </ChoosenValue>
                <SliderInput
                    type="range"
                    id={label}
                    onChange={(e) => updateValue(e)}
                    min={min}
                    max={max}
                    value={value}
                />
            </Slider>
            <LabelAndRange>
                <span>{min}</span>
                <label htmlFor={label}>{label}</label>
                <span>{max}</span>
            </LabelAndRange>
        </Container>
    );
}

RangeSlider.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    unit: PropTypes.string,
};

RangeSlider.defaultProps = {
    unit: "",
};

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    position: relative;
    min-height: 150px;
    padding: 1rem;
    border-radius: 20px;
    background: linear-gradient(
        210deg,
        rgba(224, 224, 224, 0.3) 0,
        rgba(36, 34, 34, 0.1) 70%
    );
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        transform: scale(0.9, 0.9);
        box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
            -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
    }
`;

const StyledBMI = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: -1;

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #87556f;
    background-clip: text;
    font-size: 5rem;

    p {
        padding: 1rem;
    }
`;

const DateSpan = styled.span`
    position: absolute;
    top: 2px;
    right: 1rem;
    font-size: 1rem;
`;

const Content = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        padding: 1rem 0px 0px;
        text-align: center;
    }
    h2 {
        padding: 1rem;
        font-size: 1.5rem;
        color: #23a6d5;
    }
    div {
        font-size: 0.9rem;
        display: flex;
        padding: 1rem 0 0.5rem;
        justify-content: space-evenly;
    }
`;

// Format date in "Mmm dd, yyyy" format
const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

export default function Record({ data }) {
    return (
        <StyledCard>
            <DateSpan>
                {data.date === formatDate(new Date()) ? "Today" : data.date}
            </DateSpan>
            <Content>
                <h1>{data.status}</h1>
                <h2>BMI</h2>
                <div>
                    <p>{`Weight: ${data.weight} KG`}</p>
                    <p>{`Height: ${data.height} cm`}</p>
                </div>
            </Content>
            <StyledBMI>
                <p>{data.bmi}</p>
            </StyledBMI>
        </StyledCard>
    );
}
Record.propTypes = {
    data: PropTypes.shape({
        date: PropTypes.string,
        status: PropTypes.string,
        bmi: PropTypes.number,
        weight: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

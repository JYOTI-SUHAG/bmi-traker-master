import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Record from "../Components/Record";

const RecordsContainer = styled.div`
    margin: 5rem auto;
    max-width: 1200px;
    padding: 1rem;
`;

const StyledHeader = styled.header`
    text-align: center;
    padding: 1rem 0;
`;

const CardsContainer = styled.ul`
    list-style: none;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
        flex: 0 1 350px;
    }
    gap: 1rem;
`;

export default function Records({ data }) {
    return (
        <RecordsContainer>
            <StyledHeader>
                <h1>Last Records</h1>
            </StyledHeader>
            <CardsContainer>
                {data.map((ele, idx) => (
                    <li key={`${idx * Math.random()}_${ele.date}_${ele.bmi}`}>
                        <Record data={ele} />
                    </li>
                ))}
            </CardsContainer>
        </RecordsContainer>
    );
}
Records.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
};

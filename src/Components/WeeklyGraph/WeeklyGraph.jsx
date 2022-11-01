import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const LandscapeContainer = styled.div`
    aspect-ratio: 16 / 9;
    min-width: 50vw;
    width: 90vw;
    max-height: 50vh;
`;

export default function WeeklyGraph({ data }) {
    return (
        <LandscapeContainer>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="date" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip
                        content={({ payload, label }) => (
                            <div
                                style={{
                                    background: "#fff",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    color: "#8884d8",
                                    textTransform: "uppercase",
                                }}
                            >
                                <p>{label}</p>
                                {payload.length &&
                                    payload.map(({ name, value }, idx) => (
                                        <p
                                            key={`${
                                                idx * Math.random()
                                            }_${name}_${value}`}
                                        >{`${name}: ${value}`}</p>
                                    ))}
                            </div>
                        )}
                    />
                    <Area
                        type="monotone"
                        dataKey="bmi"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </LandscapeContainer>
    );
}

WeeklyGraph.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
};

import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const GeographyTemplate = (props) => {
    const [hasError, setErrors] = useState(false);
    const [newArray, setNewArray] = useState([]);

    function fetchData() {
        try {
            const newArray = props.data.map(({ name, users }) => [name, users]);
            newArray.unshift(["name", "users"]);
            setNewArray(newArray);
            console.log(newArray);
        } catch (err) {
            setErrors(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <Chart
                chartType="GeoChart"
                width="100%"
                height="400px"
                data={newArray}
                color
            />
        </div>
    );
};

export default GeographyTemplate;

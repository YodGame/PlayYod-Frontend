import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const GeographyTemplate = () => {
    const [hasError, setErrors] = useState(false);
    const [country, setUsers] = useState({});
    const [newArray, setNewArray] = useState([]);

    async function fetchData() {
        try {
            const res = await fetch("https://api.playyod.maxnus.com/geo/players");
            const data = await res.json();
            setUsers(data);
            const newArray = data.map(({ name, users }) => [name, users]);
            newArray.unshift(["name", "users"]);
            setNewArray(newArray);
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

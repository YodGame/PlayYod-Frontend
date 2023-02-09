import React from "react";
import {Chart} from "react-google-charts";

const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["Canada", 500],
    ["France", 600],
    ["China",1439323776],
    ["India",1380004385],
    ["United States",338002651],
    ["Indonesia",275908026],
    ["Mexico",127724673],
    ["Pakistan",236882454],
    ["Mexico",127724673],
    ["Japan",123801638],
    ["Nigeria",219741895],
    ["Ethiopia",124095535],
    ["Brazil",215538160],
    ["Philippines",115969226],
    ["Bangladesh",171594827],
    ["Egypt",111384124],
];

class GeographyTemplate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="App">

                <Chart  chartType="GeoChart" width="100%" height="400px" data={data} color/>

            </div>
        );
    }
}


export default GeographyTemplate;

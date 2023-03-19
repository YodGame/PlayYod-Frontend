import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"
import {Line} from "react-chartjs-2";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
export default function LineGraph(props) {

    let arrayNames = [];
    let arrayPlayers = [];

    const API_data = props.data;
    for (let i = 0; i < API_data.length-40; i++) {
        arrayNames.push(API_data[i].name);
        arrayPlayers.push(API_data[i].players);
    }

    const dataGraph = {
        labels: arrayNames,
        datasets: [
            {
                label: 'People Active',
                fill: true,
                lineTension: 0.4,
                borderColor: 'Black',
                pointBorderColor: 'Black',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: arrayPlayers
            }
        ]
    };
    return (
        <Line
            data={dataGraph}
            width={400}
            height={400}
        />
    )
}

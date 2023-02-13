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
export default function LineGraph() {
    const dataGraph = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
                data: [65, 59, 80, 81, 56, 55, 40]
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

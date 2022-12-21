import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxium = Math.max(...dataPointValues)

    const generateChartBar = (dataPoint) => {
        return (
            <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxium} label={dataPoint.label} />
        );
    }

    return (
        <div className="chart">
            {props.dataPoints.map(generateChartBar)}
        </div>
    );
}

export default Chart;
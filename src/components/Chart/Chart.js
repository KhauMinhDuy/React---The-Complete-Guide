import React from 'react';
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const {dataPoints} = props;
    const dataPointsValue = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return (<div className="chart">
        {dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum}
                                               label={dataPoint.label}/>)}
    </div>)
}

export default Chart;
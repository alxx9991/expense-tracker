import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const totalMaximum = Math.max(...dataPoints.map((point) => point.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;

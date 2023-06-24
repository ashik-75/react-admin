import ReactApexChart from "react-apexcharts";
import { Chartwrapper } from "../../../components/chart";
import ChartHeader from "../../../components/chart/ChartHeader";

interface PropsType {
  title: string;
  subtitle?: string;
  chartData: any[];
  chartLabels: string[];
  theme?: string;
}

function AppInstalled({ title, chartData, chartLabels, theme }: PropsType) {
  return (
    <Chartwrapper>
      <ChartHeader title={title} />

      <ReactApexChart
        series={chartData}
        options={{
          colors: ["#d8b91d", "#ff0e52"],
          // labels: chartLabels,
          xaxis: {
            // type: "datetime",
            categories: chartLabels,
          },
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
            animations: {
              enabled: true,
            },
          },
          theme: {
            mode: theme === "dark" ? "dark" : "light",
          },
          fill: {
            type: "gradient",
            gradient: {
              type: "vertical",
              opacityFrom: 0.4,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
          stroke: {
            curve: "smooth",
            width: 5,
          },
          tooltip: {
            x: {
              show: false,
            },
            marker: {
              // fillColors: ["green", "purple"],
              show: false,
            },
          },
        }}
        height={380}
      />
    </Chartwrapper>
  );
}

export default AppInstalled;

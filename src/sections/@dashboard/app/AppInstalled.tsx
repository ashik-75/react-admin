import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import useChart from "../../../components/chart/useChart";

interface PropsType {
  title: string;
  subtitle?: string;
  chartData: any[];
}

function AppInstalled({ title, chartData }: PropsType) {
  const options = useChart({
    stroke: {
      width: 2,
    },
  });
  return (
    <div className="rounded-lg p-5 shadow-lg">
      <CardHeader title={title} />

      <ReactApexChart
        series={chartData}
        options={{
          colors: ["#1d4ed8", "#9f1239"],
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
            fill: {
              type: "gradient",
              gradient: {
                opacityFrom: 0.5,
                opacityTo: 0.9,
                type: "vertical",
              },
            },
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
    </div>
  );
}

export default AppInstalled;

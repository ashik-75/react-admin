import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import useChart from "../../../components/chart/useChart";

interface ChartDataType {
  name: string;
  type: string;
  fill: string;
  data: Array<number>;
}

interface PropsType {
  title: string;
  subtitle?: string;
  chartLabels: string[];
  chartData: ChartDataType[];
}

function AppWebsiteVisit({
  title,
  subtitle,
  chartLabels,
  chartData,
}: PropsType) {
  const options = useChart({
    labels: chartLabels,
    xaxis: {
      type: "datetime",
    },
    plotOptions: {
      bar: { columnWidth: "15%" },
    },
    fill: {
      type: chartData.map((i) => i.fill),
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} subtitle={subtitle} />

      <ReactApexChart
        type="line"
        series={chartData}
        options={options}
        height={380}
      />
    </div>
  );
}

export default AppWebsiteVisit;

import ReactApexChart from "react-apexcharts";
import { Chartwrapper } from "../../../components/chart";
import ChartHeader from "../../../components/chart/ChartHeader";
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
    colors: ["#0d9488", "#fb923c", "#71717a"],

    xaxis: {
      categories: chartLabels,
    },
    plotOptions: {
      bar: { columnWidth: "10%" },
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
    <Chartwrapper>
      <ChartHeader title={title} subtitle={subtitle} />

      <ReactApexChart
        type="line"
        series={chartData}
        options={options}
        height={380}
      />
    </Chartwrapper>
  );
}

export default AppWebsiteVisit;

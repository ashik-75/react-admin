import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/chart/ChartHeader";
import useChart from "../../../components/chart/useChart";
import { fNumber } from "../../../utils/formatNumber";

interface PropsType {
  title: string;
  subtitle: string;
  chartData: { label: string; value: number }[];
}

function AppConvertionRate({ title, subtitle, chartData }: PropsType) {
  const chartSeries = chartData.map((i) => i.value);
  const chartLabels = chartData.map((i) => i.label);
  const options = useChart({
    colors: ["#0284c7"],
    labels: chartLabels,
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 2,
        barHeight: "25%",
      },
    },
    tooltip: {
      marker: {
        show: false,
      },
      y: {
        formatter: (n: number) => fNumber(n),
        title: {
          formatter: () => "",
        },
      },
    },
  });
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

      <ReactApexChart
        options={options}
        type="bar"
        series={[{ data: chartSeries }]}
        height={380}
      />
    </div>
  );
}

export default AppConvertionRate;

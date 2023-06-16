import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import { fNumber } from "../../../utils/formatNumber";

interface PropsType {
  title: string;
  subtitle: string;
  chartData: { label: string; value: number }[];
}

function AppConvertionRate({ title, subtitle, chartData }: PropsType) {
  const chartSeries = chartData.map((i) => i.value);
  const chartLabels = chartData.map((i) => i.label);
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

      <ReactApexChart
        options={{
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
              formatter: (n) => fNumber(n),
              title: {
                formatter: () => "",
              },
            },
          },
        }}
        type="bar"
        series={[{ data: chartSeries }]}
        height={380}
      />
    </div>
  );
}

export default AppConvertionRate;

import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import { fNumber } from "../../../utils/formatNumber";

interface PropsType {
  title: string;
  subtitle?: string;
  chartData: { label: string; value: number }[];
  chartColors: string[];
}

function AppCurrentVisit({ title, chartData, chartColors }: PropsType) {
  const chartSeries = chartData.map((i) => i.value);
  const chartLabels = chartData.map((i) => i.label);
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

      <ReactApexChart
        series={chartSeries}
        options={{
          labels: chartLabels,
          colors: chartColors,
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: false,
                },
              },
            },
          },
          legend: {
            floating: true,
            horizontalAlign: "center",
          },
          dataLabels: {
            enabled: true,
            dropShadow: {
              enabled: false,
            },
          },
          tooltip: {
            // fillSeriesColor: true,
            enabled: true,
            y: {
              formatter: (n) => fNumber(n),
              title: {
                formatter: (name) => `${name}`,
              },
            },
          },
        }}
        type="pie"
        height={280}
      />
    </div>
  );
}

export default AppCurrentVisit;

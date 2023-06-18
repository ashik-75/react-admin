import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import useChart from "../../../components/chart/useChart";
import { fNumber } from "../../../utils/formatNumber";

interface PropsType {
  title: string;
  subtitle?: string;
  chartData: { value: number; label: string }[];
}

function AppDownloads({ title, chartData }: PropsType) {
  const chartSeries = chartData.map((i) => i.value);
  const chartLabels = chartData.map((i) => i.label);
  const options = useChart({
    labels: chartLabels,
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: true,
            value: {
              formatter: (v: any) => fNumber(v),
              fontSize: "30px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 800,
            },
            name: {
              color: "#334155",
              fontSize: "50px",
              fontWeight: 500,
              fontFamily: "Helvetica, Arial, sans-serif",
            },
            total: {
              show: true,
              formatter: function (w: any) {
                return fNumber(
                  w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0)
                );
              },
              color: "black",
            },
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  });
  return (
    <div className="rounded-lg p-5 shadow-lg">
      <CardHeader title={title} />

      <ReactApexChart
        type="donut"
        series={chartSeries}
        options={options}
        height={350}
      />
    </div>
  );
}

export default AppDownloads;

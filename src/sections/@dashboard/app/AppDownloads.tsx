import ReactApexChart from "react-apexcharts";
import { Chartwrapper } from "../../../components/chart";
import ChartHeader from "../../../components/chart/ChartHeader";
import { fNumber } from "../../../utils/formatNumber";

interface PropsType {
  title: string;
  subtitle?: string;
  chartData: { value: number; label: string }[];
  theme?: string;
}

function AppDownloads({ title, chartData, theme }: PropsType) {
  const chartSeries = chartData.map((i) => i.value);
  const chartLabels = chartData.map((i) => i.label);

  return (
    <Chartwrapper>
      <ChartHeader title={title} />

      <ReactApexChart
        type="donut"
        series={chartSeries}
        options={{
          labels: chartLabels,
          colors: ["#ce3715", "#d89d1d", "#0eae4e", "#0e7490"],
          legend: {
            show: false,
          },

          dataLabels: {
            enabled: false,
          },
          theme: {
            mode: theme === "dark" ? "dark" : "light",
          },
          plotOptions: {
            pie: {
              donut: {
                size: "92%",

                labels: {
                  show: true,
                  value: {
                    formatter: (v: any) => fNumber(v),
                    fontSize: "30px",
                    fontFamily: "Inter",
                    fontWeight: 800,
                  },
                  name: {
                    fontSize: "50px",
                    fontWeight: 500,
                    fontFamily: "Inter",
                  },
                  total: {
                    show: true,
                    formatter: function (w: any) {
                      return fNumber(
                        w.globals.seriesTotals.reduce(
                          (a: number, b: number) => {
                            return a + b;
                          },
                          0
                        )
                      );
                    },
                    color: theme === "dark" ? "white" : "black",
                  },
                },
              },
            },
          },
          tooltip: {
            enabled: false,
          },
        }}
        height={350}
      />
    </Chartwrapper>
  );
}

export default AppDownloads;

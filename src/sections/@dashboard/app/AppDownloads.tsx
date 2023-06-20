import ReactApexChart from "react-apexcharts";
import { Chartwrapper } from "../../../components/chart";
import ChartHeader from "../../../components/chart/ChartHeader";
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
    <Chartwrapper>
      <ChartHeader title={title} />

      <ReactApexChart
        type="donut"
        series={chartSeries}
        options={{
          labels: chartLabels,
          colors: ["#c026d3", "#1d4ed8", "#14532d", "#0e7490"],
          legend: {
            show: false,
          },

          dataLabels: {
            enabled: false,
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
                        w.globals.seriesTotals.reduce(
                          (a: number, b: number) => {
                            return a + b;
                          },
                          0
                        )
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
        }}
        height={350}
      />
    </Chartwrapper>
  );
}

export default AppDownloads;

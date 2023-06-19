import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import useChart from "../../../components/chart/useChart";
interface PropsType {
  title: string;
  subtitle?: string;
  chartData: { value: number; label: string }[];
}

function AppSold({ title, subtitle, chartData }: PropsType) {
  const options = useChart({
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          total: {
            fontWeight: 800,
            color: "red",
          },
          value: {
            fontWeight: 900,
            fontSize: 23,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    fill: {
      type: "gradient",
      colors: ["#f59e0b"],
      gradient: {
        shade: "dark",
        type: "vertical",
        opacityTo: 1,
        opacityFrom: 1,
        gradientToColors: ["#f59e0b"],
        //   shadeIntensity: 0.5,
        stops: [0, 100],
      },
    },
  });
  const chartSeries = chartData.map((i) => i.value);
  const labels = chartData.map((i) => i.label);
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

      <ReactApexChart
        type="radialBar"
        series={chartSeries}
        options={{
          colors: ["#292524"],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "60%",
              },
              dataLabels: {
                name: {
                  show: false,
                },
                total: {
                  fontWeight: 800,
                  color: "red",
                },
                value: {
                  fontWeight: 900,
                  fontSize: 23,
                  offsetY: 10,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
          fill: {
            type: "gradient",

            gradient: {
              type: "vertical",
              opacityTo: 0.9,
              opacityFrom: 0.8,

              shadeIntensity: 0.5,
              stops: [0, 100],
            },
          },
        }}
        height={180}
      />
    </div>
  );
}

export default AppSold;

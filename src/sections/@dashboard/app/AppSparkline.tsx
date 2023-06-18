import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";

interface PropsType {
  title: string;
  subtitle?: string;
  chartData: any[];
}

function AppSparkline({ title, chartData }: PropsType) {
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

      <ReactApexChart
        series={chartData}
        type="line"
        options={{
          chart: {
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: (v: any) => "",
              },
            },
          },
        }}
        width={200}
        height={45}
      />
      <ReactApexChart
        series={chartData}
        type="area"
        options={{
          chart: {
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: (v: any) => "",
              },
            },
          },
        }}
        width={200}
        height={45}
      />
      <ReactApexChart
        series={chartData}
        type="bar"
        options={{
          chart: {
            sparkline: {
              enabled: true,
            },
          },

          stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "40%",
            },
          },
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: (v: any) => "",
              },
            },
            marker: {
              show: false,
            },
          },
        }}
        width={100}
        height={35}
      />

      <br />
      <br />
      <ReactApexChart
        series={chartData}
        type="area"
        options={{
          colors: ["#3730a3"],
          chart: {
            sparkline: {
              enabled: true,
            },
          },
          fill: {
            colors: ["#083344"],
            type: "gradient",
            gradient: {
              //   shade: "dark",
              opacityFrom: 0,
              opacityTo: 0.8,
              stops: [0, 100],
              shadeIntensity: 1,
            },
          },

          stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "40%",
            },
          },
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: (v: any) => "",
              },
            },
            marker: {
              show: false,
            },
          },
        }}
        width={500}
        height={200}
      />
    </div>
  );
}

export default AppSparkline;

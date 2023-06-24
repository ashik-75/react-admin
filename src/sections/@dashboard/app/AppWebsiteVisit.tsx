import ReactApexChart from "react-apexcharts";
import { Chartwrapper } from "../../../components/chart";
import ChartHeader from "../../../components/chart/ChartHeader";

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
  theme?: string;
}

function AppWebsiteVisit({
  title,
  subtitle,
  chartLabels,
  chartData,
  theme,
}: PropsType) {
  return (
    <Chartwrapper>
      <ChartHeader title={title} subtitle={subtitle} />

      <ReactApexChart
        type="line"
        series={chartData}
        options={{
          colors: ["#0d9488", "#fbd53c", "#0fb718"],
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          stroke: {
            curve: "smooth",
            lineCap: "round",
          },

          xaxis: {
            categories: chartLabels,
          },

          plotOptions: {
            bar: { columnWidth: "10%" },
          },
          theme: {
            mode: theme === "dark" ? "dark" : "light",
            // palette: "palette1",
            monochrome: {
              shadeIntensity: 0,
            },
          },
          fill: {
            type: chartData.map((data) => data.fill),
            gradient: {
              type: "vertical",
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
          tooltip: {
            shared: true,
            intersect: false,

            y: {
              formatter: (y) => {
                if (typeof y !== "undefined") {
                  return `${y.toFixed(0)} visits`;
                }
                return y;
              },
            },
          },
        }}
        height={380}
      />
    </Chartwrapper>
  );
}

export default AppWebsiteVisit;

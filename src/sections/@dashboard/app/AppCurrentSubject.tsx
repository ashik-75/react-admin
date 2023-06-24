import ReactApexChart from "react-apexcharts";
import { ChartHeader, Chartwrapper } from "../../../components/chart";

interface PropsType {
  title: string;
  chartData: { name: string; data: number[] }[];
  chartLabels: string[];
  theme?: string;
}

function AppCurrentSubject({
  title,
  chartData,
  theme,
  chartLabels,
}: PropsType) {
  return (
    <Chartwrapper>
      <ChartHeader title={title} />

      <ReactApexChart
        type="radar"
        series={chartData}
        options={{
          labels: chartLabels,
          colors: ["#8b5cf6", "#f97316", "#65a30d"],
          chart: {
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            x: {
              show: false,
            },
          },
          theme: {
            mode: theme === "dark" ? "dark" : "light",
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            fontWeight: 500,
            labels: {
              colors: ["#71717a"],
            },
            fontSize: "13px",
            fontFamily: "Inter",
          },
        }}
        height={380}
      />
    </Chartwrapper>
  );
}

export default AppCurrentSubject;

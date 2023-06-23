import ReactApexChart from "react-apexcharts";
import { ChartHeader, Chartwrapper } from "../../../components/chart";

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
    <Chartwrapper>
      <ChartHeader title={title} />

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
            // floating: true,
            horizontalAlign: "center",
            position: "bottom",
            floating: false,
            itemMargin: {
              horizontal: 8,
            },
            fontWeight: 500,
            fontSize: "13px",
            fontFamily: "Inter",
            labels: {
              colors: ["#6b7280"],
            },
          },
          dataLabels: {
            enabled: true,
            dropShadow: {
              enabled: false,
            },
          },
          tooltip: {
            enabled: true,

            x: {
              show: false,
            },
          },
        }}
        type="pie"
        height={280}
      />
    </Chartwrapper>
  );
}

export default AppCurrentVisit;

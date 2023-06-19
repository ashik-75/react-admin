import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";
import useChart from "../../../components/chart/useChart";

interface PropsType {
  title: string;
  chartData: { name: string; data: number[] }[];
  chartLabels: string[];
}

function AppCurrentSubject({ title, chartData, chartLabels }: PropsType) {
  const options = useChart({
    labels: chartLabels,
  });
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

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
    </div>
  );
}

export default AppCurrentSubject;

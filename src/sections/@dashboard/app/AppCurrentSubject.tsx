import ReactApexChart from "react-apexcharts";
import CardHeader from "../../../components/CardHeader/CardHeader";

interface PropsType {
  title: string;
  chartData: { name: string; data: number[] }[];
  chartLabels: string[];
}

function AppCurrentSubject({ title, chartData, chartLabels }: PropsType) {
  return (
    <div className="rounded-lg p-5 shadow">
      <CardHeader title={title} />

      <ReactApexChart
        type="radar"
        series={chartData}
        options={{
          labels: chartLabels,
        }}
        height={380}
      />
    </div>
  );
}

export default AppCurrentSubject;

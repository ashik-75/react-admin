import AppConvertionRate from "../sections/@dashboard/app/AppConvertionRate";
import AppCurrentSubject from "../sections/@dashboard/app/AppCurrentSubject";
import AppCurrentVisit from "../sections/@dashboard/app/AppCurrentVisit";
import AppDownloads from "../sections/@dashboard/app/AppDownloads";
import AppInstalled from "../sections/@dashboard/app/AppInstalled";
import AppSold from "../sections/@dashboard/app/AppSold";
import AppSparkline from "../sections/@dashboard/app/AppSparkline";
import AppWebsiteVisit from "../sections/@dashboard/app/AppWebsiteVisit";

function DashboardAppPage() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2">
          <AppWebsiteVisit
            title="Website Visits"
            subtitle="(+43%) than last year"
            chartLabels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
            ]}
            chartData={[
              {
                name: "Team A",
                type: "column",
                fill: "solid",
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
              },
              {
                name: "Team B",
                type: "area",
                fill: "gradient",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
              },
              {
                name: "Team C",
                type: "line",
                fill: "solid",
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
              },
            ]}
          />
        </div>

        <div className="col-span-1">
          <AppCurrentVisit
            title="Current Visit"
            chartData={[
              { label: "America", value: 4344 },
              { label: "Asia", value: 5435 },
              { label: "Europe", value: 1443 },
              { label: "Africa", value: 4443 },
            ]}
            chartColors={["#ffb703", "#f72585", "#ba181b", "#028090"]}
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2">
          <AppConvertionRate
            title="Conversion Rates"
            subtitle="(+43%) than last year"
            chartData={[
              { label: "Italy", value: 400 },
              { label: "Japan", value: 430 },
              { label: "China", value: 448 },
              { label: "Canada", value: 470 },
              { label: "France", value: 540 },
              { label: "Germany", value: 580 },
              { label: "South Korea", value: 690 },
              { label: "Netherlands", value: 1100 },
              { label: "United States", value: 1200 },
              { label: "United Kingdom", value: 1380 },
            ]}
          />
        </div>

        <div className="col-span-1">
          <AppCurrentSubject
            title="Current Subject"
            chartData={[
              { name: "Semister", data: [80, 50, 30, 40, 100, 20] },
              { name: "MidTerm", data: [20, 30, 40, 80, 20, 80] },
              { name: "Final", data: [44, 76, 78, 13, 43, 10] },
            ]}
            chartLabels={[
              "Bangla",
              "English",
              "Arabic",
              "Drama",
              "ICT",
              "Science",
            ]}
          />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <AppDownloads
          title="Current Download"
          subtitle="(+10%) than last year"
          chartData={[
            { label: "Ios", value: 400454 },
            { label: "Android", value: 430343 },
            { label: "Mac", value: 54834 },
            { label: "Windows", value: 21270 },
          ]}
        />

        <AppInstalled
          title="Area Installed"
          chartLabels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
          chartData={[
            { name: "Asia", type: "area", data: [80, 50, 30, 40, 100, 20] },
            { name: "America", type: "area", data: [20, 30, 40, 80, 20, 80] },
          ]}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <AppSold
          title="Current Download"
          subtitle="(+10%) than last year"
          chartData={[{ label: "Sold", value: 70 }]}
        />

        <AppSparkline
          title="Total Active users"
          chartData={[
            {
              data: [80, 50, 30, 40, 100, 20, 300, 278, 78, 38, 89],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default DashboardAppPage;

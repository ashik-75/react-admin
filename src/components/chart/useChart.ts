import lodash from "lodash";

export default function useChart(options: any) {
  const LABEL_TOTAL = {
    show: true,
    label: "Total",
    color: "#475569",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 10,
  };

  const LABEL_VALUE = {
    offsetY: 8,
    color: "#0f172a",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 12,
  };

  const baseOptions = {
    // Colors
    colors: [
      "#1e40af",
      "#991b1b",
      "#0d9488",
      "#f97316",
      "#059669",
      "#713f12",
      "#064e3b",
      "#030712",
      "#030712",
    ],

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      // animations: { enabled: false },
      foreColor: "#78716c",
      fontFamily: "Inter",
    },

    // States
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Datalabels (cover)
    dataLabels: { enabled: false },

    // Stroke (cover)
    stroke: {
      width: 4,
      curve: "smooth",
      lineCap: "rounded",
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: "#78716c",
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
      strokeColors: "white",
    },

    // Tooltip
    tooltip: {
      x: {
        show: false,
      },
    },

    // Legend (cover)
    legend: {
      show: true,
      fontSize: String(13),
      position: "top",
      horizontalAlign: "right",
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors: "#374151",
      },
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        borderRadius: 4,
        columnWidth: "28%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },

      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },

      // Radialbar
      radialBar: {
        track: {
          strokeWidth: "100%",
          background: "#1f2937",
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },

      // Radar
      radar: {
        polygons: {
          fill: { colors: ["transparent"] },
          strokeColors: "#1f2937",
          connectorColors: "#1f2937",
        },
      },

      // polarArea
      polarArea: {
        rings: {
          strokeColor: "#1f2937",
        },
        spokes: {
          connectorColors: "#1f2937",
        },
      },
    },

    // Responsive
    responsive: [
      {
        // sm
        breakpoint: "400px",
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        // md
        breakpoint: "876px",
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  };

  return lodash.merge(baseOptions, options);
}

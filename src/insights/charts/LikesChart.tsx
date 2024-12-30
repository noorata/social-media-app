import React from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

interface LikesChartProps {
  data: number[];
}

const LikesChart: React.FC<LikesChartProps> = ({ data }) => {
  const { t } = useTranslation();

  const options = {
    chart: {
      id: "likes-bar-chart",
    },
    xaxis: {
      categories: Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`),
    },
  };

  return (
    <div className="card shadow-sm mb-4 p-4 rounded">
      <h5 className="mb-3">{t("insights.likesByDay")}</h5>
      <Chart
        options={options}
        series={[{ name: t("insights.likesByDay"), data }]}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default LikesChart;

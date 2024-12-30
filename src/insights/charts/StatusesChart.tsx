import React from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

interface StatusesChartProps {
  data: number[];
}

const StatusesChart: React.FC<StatusesChartProps> = ({ data }) => {
  const { t } = useTranslation();

  const options = {
    labels: [
      t("postsFilters.draft"),
      t("postsFilters.published"),
      t("postsFilters.deleted"),
    ],
    colors: ["#FFA500", "#008000", "#FF0000"],
  };

  return (
    <div className="card shadow-sm p-4 rounded">
      <h5 className="mb-3">{t("insights.postStatusDistribution")}</h5>
      <Chart options={options} series={data} type="donut" height={300} />
    </div>
  );
};

export default StatusesChart;

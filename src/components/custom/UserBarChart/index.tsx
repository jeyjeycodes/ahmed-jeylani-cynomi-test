import { UserWithSleepData } from "@/models/user";
import * as echarts from "echarts";
import { FC, useEffect, useRef } from "react";

interface Props {
  userData: UserWithSleepData;
}

const UserBarChart: FC<Props> = ({ userData }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    // Based on the documentation, the options should be an object with the following structure:
    const options = {
      xAxis: {
        type: "category",
        data: userData.sleepData.map((data) =>
          new Date(data.date).toLocaleDateString(),
        ),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: userData.sleepData.map((data) => data.sleepDurationHrs),
          type: "bar",
        },
      ],
    };

    chart.setOption(options);
  }, [userData]);
  // This will inject the chart into the div element with the ref chartRef
  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default UserBarChart;

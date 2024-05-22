import { isDateWithinLast7Days } from "@/lib/utils";
import { UserWithSleepData } from "@/models/user";
import { format } from "date-fns";
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

    // Gets the last 7 days of sleep data
    const filteredData = userData.sleepData.filter((data) =>
      isDateWithinLast7Days(data.date),
    );

    // Based on the documentation, the options should be an object with the following structure:
    const options = {
      xAxis: {
        type: "category",
        data: filteredData.map((d) => format(d.date, "yyyy-MM-dd")),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: filteredData.map((data) => data.sleepDurationHrs),
          type: "bar",
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose(); // Do this to reset chart
    };
  }, [userData]);
  // This will inject the chart into the div element with the ref chartRef
  return (
    <div
      className={"bg-white rounded-lg mt-10 shadow-md"}
      ref={chartRef}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default UserBarChart;

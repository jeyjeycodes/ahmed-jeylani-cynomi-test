"use client";
import SleepDataTable from "@/components/custom/SleepDataTable";
import UserBarChart from "@/components/custom/UserBarChart";
import { UserWithSleepData } from "@/models/user";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [usersData, setUsersData] = useState<UserWithSleepData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chosenUser, setChosenUser] = useState<UserWithSleepData>();

  const getData = async () => {
    try {
      const res = await axios.get<UserWithSleepData[]>("/api/sleep-data");
      setUsersData(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowClicked = (userData: UserWithSleepData) => {
    setChosenUser(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={"container flex flex-col items-center p-10"}>
      <h1 className={"text-4xl mb-10"}>Sleep Data Overview</h1>
      {isLoading && <Loader2 className="animate-spin" size={64} />}
      {!isLoading && !usersData && <p className={"font-bold"}>No data</p>}
      {!isLoading && usersData && (
        <SleepDataTable
          usersData={usersData}
          rowClickedHandler={handleRowClicked}
        />
      )}
      {!chosenUser && (
        <h1 className={"font-bold text-2xl mt-10"}>
          You need to select a user to see the bar chart
        </h1>
      )}
      {chosenUser && (
        <>
          <h1 className={"text-4xl mt-10"}>
            {chosenUser?.name}&apos;s Sleep Bar Chart for the last 7 days
          </h1>
          <UserBarChart userData={chosenUser} />
        </>
      )}
    </div>
  );
}

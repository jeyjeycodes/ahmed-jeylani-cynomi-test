"use client";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect } from "react";

export default function Page() {
  const getData = async () => {
    const res = await axios.get("/api/sleep-data");

    console.log("RESPONSE: ", res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={"container"}>
      <Table>
        <TableCaption>Sleep Data Overview</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Entries</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}

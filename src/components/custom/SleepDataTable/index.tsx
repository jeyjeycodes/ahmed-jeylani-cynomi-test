import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserWithSleepData } from "@/models/user";
import { Gender } from "@prisma/client";
import { FC } from "react";

interface Props {
  usersData: UserWithSleepData[];
  rowClickedHandler: (userData: UserWithSleepData) => void;
}

const SleepDataTable: FC<Props> = ({ usersData, rowClickedHandler }) => {
  return (
    <>
      <Table className={"bg-white rounded-lg"}>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Entries</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData.map((userData) => (
            <TableRow
              key={userData.id}
              onClick={() => rowClickedHandler(userData)}
            >
              <TableCell className="font-medium">{userData.name}</TableCell>
              <TableCell>
                {userData.gender === Gender.MALE ? "Male" : "Female"}
              </TableCell>
              <TableCell>{userData.sleepData.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SleepDataTable;

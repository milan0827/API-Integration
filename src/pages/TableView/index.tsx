import { useEffect, useState } from "react";
import { getAllUser } from "../../services/apiServices";
import { UserDataType } from "../../shared/type";
import TableRow from "./TableRow";

function TableView() {
  const [userData, setUserData] = useState([]);

  useEffect(function () {
    getAllUser().then((data: UserDataType[]) => setUserData(data));
  }, []);

  // Data to be displayed
  return (
    <>
      <h1 className="mb-[50px] pl-[50px] text-center text-3xl font-semibold uppercase text-gray-700/80 ">
        User Data
      </h1>
      <table className="m-auto w-4/5 table-fixed border-collapse border-2 border-solid border-gray-300">
        <thead className="bg-slate-300">
          <tr className="text-gray-600/70">
            <th className="">First Name</th>
            <th>Last Name</th>
            <th className="">Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Country</th>
            <th>City</th>
            <th>Gender</th>
            <th>Martial Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {userData.map((user: UserDataType) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableView;

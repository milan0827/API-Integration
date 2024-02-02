import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "~/hooks/useFetch";
import { UserDataType } from "~/shared/type";
import TableRow from "./TableRow";

function TableView() {
  const { data, isLoading, error } = useFetch();
  const [userList, setUserList] = useState<UserDataType[]>(data);
  const navigate = useNavigate();

  useEffect(() => {
    setUserList(data);
  }, [data]);

  if (error) {
    return (
      <h1 className="mb-[50px] pl-[50px] text-center text-3xl font-semibold uppercase text-gray-700/80 ">
        {error}
      </h1>
    );
  }

  // Data to be displayed
  return (
    <>
      <h1 className="mb-[32px] pl-[50px] text-center text-3xl font-semibold uppercase text-gray-700/80 ">
        User Data
      </h1>
      <button
        onClick={() => navigate("/")}
        className="rounded-sm bg-blue-400 px-4 py-1 text-right text-gray-100"
      >
        Add new +
      </button>
      <table className="m-auto mb-24 w-[95%] table-fixed border-collapse border-2 border-solid border-gray-300">
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

        {!isLoading ? (
          <tbody className="">
            {userList?.map((user: UserDataType) => (
              <TableRow
                key={user.id}
                user={user}
                setUserList={setUserList}
                userList={userList}
              />
            ))}
          </tbody>
        ) : null}
      </table>
    </>
  );
}

export default TableView;

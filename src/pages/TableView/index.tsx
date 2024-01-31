import useFetch from "../../hooks/useFetch";
import { UserDataType } from "../../shared/type";
import TableRow from "./TableRow";

const BASE_URL = "http://localhost:3000/user";

function TableView() {
  const { data, isLoading, error } = useFetch(BASE_URL);

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

        {!isLoading ? (
          <tbody className="">
            {data.map((user: UserDataType) => (
              <TableRow key={user.email} user={user} />
            ))}
          </tbody>
        ) : null}
      </table>
    </>
  );
}

export default TableView;

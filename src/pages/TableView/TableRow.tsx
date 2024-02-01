import { useNavigate } from "react-router-dom";
import { UserDataType } from "../../shared/type";
import { shortString } from "../../utils/helpers";
import { useDelete } from "../../hooks/useDelete";

type UserType = {
  user: UserDataType;
  setUserList: (data: UserDataType[]) => void;
  userList: UserDataType[];
};

export default function TableRow({ user, setUserList, userList }: UserType) {
  const { deleteUser } = useDelete(
    `http://localhost:3000/user/`,
    user,
    setUserList,
    userList,
  );

  const navigate = useNavigate();
  return (
    <tr className="text-center text-gray-600 even:bg-slate-200/60">
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{shortString(user.email)}</td>
      <td>{user.age}</td>
      <td>{user.address}</td>
      <td>{user.country}</td>
      <td>{user.city}</td>
      <td>{user.gender}</td>
      <td>{user.martialStatus}</td>
      <td>
        <button
          onClick={() => {
            navigate(`/user-details/${user.id}`, { state: { user } });
          }}
          className="bg-yellow-300 px-4 py-1  text-white"
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteUser();
          }}
          className="bg-red-400/70 px-2 py-1 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

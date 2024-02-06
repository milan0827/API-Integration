import { useNavigate } from "react-router-dom";
import Button from "~/components/Button/Button";
import { useDelete } from "~/hooks/useDelete";
import { UserDataType } from "~/shared/type";
import { shortString } from "~/utils/helpers";

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
        <Button
          btnType="secondary"
          onClick={() => {
            navigate(`/user-details/${user.id}`, { state: { user } });
          }}
          label="Edit"
        />
        <Button
          btnType="tertiary"
          onClick={() => deleteUser()}
          label="Delete"
        />
      </td>
    </tr>
  );
}

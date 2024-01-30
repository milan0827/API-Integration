import { UserDataType } from "../../shared/type";
import { shortString } from "../../utils/helpers";

type UserType = {
  user: UserDataType;
};

export default function TableRow({ user }: UserType) {
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
      <td>Edit | Delete</td>
    </tr>
  );
}

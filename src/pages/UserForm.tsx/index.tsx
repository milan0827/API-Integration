import { useState } from "react";
import { createUser } from "../../services/apiServices";
import { UserDataType } from "../../shared/type";

function UserForm() {
  const [data, setData] = useState<UserDataType>({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    address: "",
    country: "",
    city: "",
    gender: "",
    martialStatus: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleCreateData(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    createUser(data);
  }

  return (
    <form
      className="grid grid-cols-gridAutoFitCol gap-xl p-[50px]"
      onSubmit={handleCreateData}
    >
      <div className="flex flex-col">
        <label className="ml-1 text-[1rem] font-semibold text-gray-500">
          First Name
        </label>
        <input
          type="text"
          placeholder="First name"
          className="input"
          name="firstName"
          value={data.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          className="input"
          name="lastName"
          value={data.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">Email</label>
        <input
          type="text"
          placeholder="Email"
          className="input"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">Age</label>
        <input
          type="text"
          placeholder="Age"
          className="input"
          name="age"
          value={data.age}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="input"
          name="address"
          value={data.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">Country</label>
        <input
          type="text"
          placeholder="Country"
          className="input"
          name="country"
          value={data.country}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">City</label>
        <input
          type="text"
          placeholder="City"
          className="input"
          name="city"
          value={data.city}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">Gender</label>
        <input
          type="text"
          placeholder="Gender"
          className="input"
          name="gender"
          value={data.gender}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="ml-1 text-[0.85rem] text-gray-500">
          Martial Status
        </label>
        <input
          type="text"
          placeholder="Martial status"
          className="input"
          name="martialStatus"
          value={data.martialStatus}
          onChange={handleInputChange}
        />
      </div>

      <button className="bg-blue-400 p-4 text-gray-200">Submit</button>
    </form>
  );
}

export default UserForm;

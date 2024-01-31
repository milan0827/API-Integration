import { useEffect, useState } from "react";
// import { useApi } from "../../hooks/useApi";
import { UserDataType } from "../../shared/type";
import { usePost } from "../../hooks/usePost";
import { useLocation } from "react-router-dom";
import { useUpdate } from "../../hooks/useUpdate";

function UserForm() {
  const [userData, setUserData] = useState<UserDataType>({
    
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

  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();
  const fetchedUserData = location?.state?.user;
  const { error, fetchSingleUser } = useUpdate(userData.id, userData);

  useEffect(() => {
    if (fetchedUserData) {
      setIsEditMode(true);
      setUserData(fetchedUserData);
    }
  }, [fetchedUserData]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const { call, isLoading } = usePost({
    url: "/user",
    userData: userData,
  });
  const HandleCreateData = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditMode) {
      fetchSingleUser();
      setIsEditMode(false);
    }
    call();
  };

  return (
    <>
      <h1 className="mb-[50px] pl-[50px] text-center text-3xl font-semibold uppercase text-gray-700/80  ">
        User form
      </h1>
      <form
        className="grid grid-cols-gridAutoFitCol gap-xl px-[50px]"
        onSubmit={HandleCreateData}
      >
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">First Name</label>
          <input
            type="text"
            placeholder="First name"
            className="input"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            className="input"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="input"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Age</label>
          <input
            type="text"
            placeholder="Age"
            className="input"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="input"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Country</label>
          <input
            type="text"
            placeholder="Country"
            className="input"
            name="country"
            value={userData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">City</label>
          <input
            type="text"
            placeholder="City"
            className="input"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Gender</label>
          <input
            type="text"
            placeholder="Gender"
            className="input"
            name="gender"
            value={userData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Martial Status</label>
          <input
            type="text"
            placeholder="Martial status"
            className="input"
            name="martialStatus"
            value={userData.martialStatus}
            onChange={handleInputChange}
          />
        </div>

        <button className="bg-blue-400 p-4 text-gray-200">
          {isLoading ? "loading" : "submit"}
        </button>
      </form>
    </>
  );
}

export default UserForm;

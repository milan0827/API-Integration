import { useEffect, useId, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePost } from "~/hooks/usePost";
import { useUpdate } from "~/hooks/useUpdate";
import { UserDataType } from "~/shared/type";

type InvalidMessagePropsType = {
  isError: boolean;
  userData: string;
  errMsg: string;
};

function InvalidMessage({
  isError,
  userData,
  errMsg,
}: InvalidMessagePropsType) {
  return isError && userData.length <= 0 ? (
    <p className="text-sm font-semibold text-red-400">{errMsg}</p>
  ) : null;
}

function UserForm() {
  const id = useId();
  const [userData, setUserData] = useState<UserDataType>({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    address: "",
    country: "",
    city: "",
    gender: "",
    martialStatus: "",
  });

  const [isError, setIsError] = useState<boolean>(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();
  const fetchedUserData = location?.state?.user;
  const { error, updateUser } = useUpdate(userData.id, userData);
  const navigate = useNavigate();
  const { call, isLoading } = usePost({
    url: "/",
    userData: userData,
  });

  useEffect(() => {
    if (fetchedUserData) {
      setIsEditMode(true);
      setUserData(fetchedUserData);
    }
  }, [fetchedUserData]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const HandleCreateData = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDataValues: string[] | number[] = Object.values(userData);
    for (let i = 0; i < userDataValues.length; i++) {
      if (userDataValues[i].length === 0) {
        setIsError(true);
        return;
      }
    }

    if (isEditMode) {
      updateUser();
      setIsEditMode(false);
      navigate("/user-details");
      return;
    }
    call();
    navigate("/user-details");
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1 className="mb-[32px] pl-[50px] text-center text-3xl font-semibold uppercase text-gray-700/80  ">
        User form
      </h1>
      <form
        className="grid grid-cols-gridAutoFitCol gap-[3rem] px-[50px]"
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
          <InvalidMessage
            isError={isError}
            userData={userData.firstName}
            errMsg="Invalid first name"
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
          <InvalidMessage
            isError={isError}
            userData={userData.lastName}
            errMsg="Invalid last name"
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
          <InvalidMessage
            isError={isError}
            userData={userData.email}
            errMsg="Invalid email"
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Age</label>
          <input
            type="text"
            placeholder="Age"
            className="input"
            name="age"
            value={Number(userData.age) || 0}
            onChange={handleInputChange}
          />
          <InvalidMessage
            isError={isError}
            userData={userData.age}
            errMsg="Invalid age"
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
          <InvalidMessage
            isError={isError}
            userData={userData.address}
            errMsg="Invalid address"
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
          <InvalidMessage
            isError={isError}
            userData={userData.country}
            errMsg="Invalid country"
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
          <InvalidMessage
            isError={isError}
            userData={userData.city}
            errMsg="Invalid city"
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
          <InvalidMessage
            isError={isError}
            userData={userData.gender}
            errMsg="Invalid gender"
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
          <InvalidMessage
            isError={isError}
            userData={userData.martialStatus}
            errMsg="Invalid martial status"
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

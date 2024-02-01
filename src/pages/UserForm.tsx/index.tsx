import { useEffect, useId, useState } from "react";
// import { useApi } from "../../hooks/useApi";
import { UserDataType } from "../../shared/type";
import { usePost } from "../../hooks/usePost";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdate } from "../../hooks/useUpdate";

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

  const [validationError, setValidationError] = useState("");
  const [isError, setIsError] = useState<boolean>(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();
  const fetchedUserData = location?.state?.user;
  const { error, updateUser } = useUpdate(userData.id, userData);
  const navigate = useNavigate();

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
    url: "/",
    userData: userData,
  });

  // userDataValues.forEach((el, i) => {

  // });

  const HandleCreateData = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDataValues = Object.values(userData);

    for (let i = 0; i < userDataValues.length; i++) {
      if (userDataValues[i].length === 0) {
        return setIsError(true);
      }
      setIsError(false);
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
    return <h1>{error} </h1>;
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
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.firstName.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your first name
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            className="input"
            name="lastName"
            value={userData.lastName}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.lastName.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your last name
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="input"
            name="email"
            value={userData.email}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.email.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your email
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Age</label>
          <input
            type="text"
            placeholder="Age"
            className="input"
            name="age"
            value={+userData.age}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.age.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your age
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="input"
            name="address"
            value={userData.address}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.address.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your address
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Country</label>
          <input
            type="text"
            placeholder="Country"
            className="input"
            name="country"
            value={userData.country}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.country.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your country
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">City</label>
          <input
            type="text"
            placeholder="City"
            className="input"
            name="city"
            value={userData.city}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.city.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your city
          </p>{" "}
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Gender</label>
          <input
            type="text"
            placeholder="Gender"
            className="input"
            name="gender"
            value={userData.gender}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.gender.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your gender
          </p>
        </div>
        <div className="flex flex-col">
          <label className=" text-[1rem] text-gray-500">Martial Status</label>
          <input
            type="text"
            placeholder="Martial status"
            className="input"
            name="martialStatus"
            value={userData.martialStatus}
            onChange={(e) => {
              handleInputChange(e);
              setIsError(false);
            }}
          />
          <p
            className={`${isError && userData.martialStatus.length <= 0 ? "none visible" : "hidden"} `}
          >
            Enter your martial status
          </p>
        </div>

        <button className="bg-blue-400 p-4 text-gray-200">
          {isLoading ? "loading" : "submit"}
        </button>
      </form>
    </>
  );
}

export default UserForm;

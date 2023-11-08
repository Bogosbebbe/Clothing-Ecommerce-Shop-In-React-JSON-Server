import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import axios from "axios";

const Profile = () => {
    const [ id, setId ] = useState(sessionStorage.getItem("id"));
    const [ userData, setUserData ] = useState({});

    const getUserData = async () => {
        try{
            const response = await axios(`http://localhost:8080/user/${sessionStorage.getItem("id")}`);
            const data = response.data;
            setUserData(data);
            console.log(data);
          }catch(error){
            console.log(error.response);
          }
    }

    useEffect(() => {
        getUserData();
    }, [])

  return (
    <>
      <SectionTitle title="User Profile" path="Home | User Profile" />
      <form className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
             value={userData.name}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Lastname</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={userData.lastname}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={userData.email}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="tel"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={userData.phone}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Adress</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={userData.adress}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={userData.password}
            />
          </div>

        </div>
        <button className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10" type="submit">Update Profile</button>
      </form>
    </>
  );
};

export default Profile;

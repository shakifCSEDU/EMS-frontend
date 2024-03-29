import axios from "axios";
import React, { useRef, useState } from "react";
import { AUTH_BASE_API_URL, getToken } from "../AuthService";
import { useNavigate } from "react-router-dom";
import OAuth from "./OAuth";

const RegisterStudent = () => {
  
  const navigate = useNavigate();

  const username = useRef(null);
  const email  = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);

  const departmentName = useRef(null);
  const batchNo = useRef(null);
  const description = useRef(null);

  const handleRegister = async () => {
    const studentObj = {
      "department_name":departmentName.current?.value,
      "batch_no": batchNo.current?.value,
      "user": {
        "username":username.current?.value,
        "email": email.current?.value,
        "phone": phone.current?.value,
        "password":password.current?.value,
        "role":{
            "name":"ROLE_STUDENT",
            "description":description.current?.value
        }
      },
      "teacher":null
      }
    
    await axios
      .post(AUTH_BASE_API_URL + "/register-student", studentObj)
      .then((response) => {
        console.log(response.data);
        navigate("/wait-user");

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="p-2 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">
          Register Student for EMS
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            ref={username}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            ref={email}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            ref={password}
          />
          <input
            type="number"
            placeholder="Phone "
            className="border p-3 rounded-lg"
            ref={phone}
          />
          <input
            type="text"
            placeholder="department name"
            className="border p-3 rounded-lg"
            ref={departmentName}
          />
          <input
            type="text"
            placeholder="batch no"
            className="border p-3 rounded-lg"
            ref={batchNo}
          />
          <input
            type="text"
            placeholder="description"
            className="border p-3 rounded-lg"
            ref={description}
          />
          <button
            type="button" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            onClick={() => handleRegister()}
          >
            Register
          </button>
          <OAuth doAction="register-student"/>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;

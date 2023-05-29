import React, { useState, useRef, useContext } from "react";
import axios from "axios";

import "./style.scss";
// import { TokenContext } from "../../Hook/useContext";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "antd";

import { useForm } from "react-hook-form";
import { useAuthToken } from "../../context/context";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../../utils/axios";

const Register = () => {
  // const { token, setToken } = useAuthToken();
  const [tok, setTok] = useState({});

  const nav = useNavigate();

  const mutation = useMutation((postdata) => {
    return instance.post("/auth/signup", postdata);
  });

  // console.log(token);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.password);
    mutation.mutate(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (res) => {
          // console.log("ondata", res);
          toast.success("Register successfully");
          // setTimeout(() => {
          //   nav("/");
          // }, 1500);
        },
        onError: (error) => {
          // console.log("query error", error);
          toast.error("Register failed ");
        },
      }
    );
  };

  return (
    <>
      <div className="container">
        <div className="form-login">
          <form action="" onSubmit={handleSubmit(onSubmitForm)}>
            <div>
              <label htmlFor="exampleInputEmail2">Name :</label>
              <div>
                <input
                  type="text"
                  id="exampleInputEmail2"
                  placeholder="Enter username"
                  // className="form-control input-email2"
                  // required
                  // ref={username}

                  {...register("name", { required: true, minLength: 4 })}
                />
              </div>
              {errors.name?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.name?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <div>
              <label htmlFor="exampleInputEmail2">Email:</label>
              <div>
                <input
                  type="email"
                  id="exampleInputEmail2"
                  placeholder="Enter email"
                  // className="form-control input-email2"
                  // required
                  // ref={username}

                  {...register("email", { required: true, minLength: 4 })}
                />
              </div>
              {errors.email?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.email?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <div>
              <label htmlFor="exampleInputPassword2">Password:</label>
              <div>
                <input
                  type="text"
                  id="exampleInputPassword2"
                  placeholder="Password"
                  // className="form-control input-password2"
                  // required
                  // ref={password}

                  {...register("password", { required: true, minLength: 4 })}
                />
              </div>
              {errors.password?.type == "required" && (
                <span className="warning">This field is required</span>
              )}
              {errors.password?.type == "minLength" && (
                <span className="warning"> minLength 4</span>
              )}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export { Register };

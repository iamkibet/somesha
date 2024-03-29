"use client";

import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string()
    .required("Please enter password")
    .min(6, "Password too short"),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      setRoute("Verification")
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="flex flex-col w-full h-full ">
      <h1 className={`${styles.title}`}>Welcome to Somesha</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className={`${styles.label}`} htmlFor="name">
                Enter your name
            </label>
            <input
                type="text"
                name="name"
                value={values.name}
                id="name"
                placeholder="John Doe"
                onChange={handleChange}
                className={`${errors.name && touched.name && "border-red-500"} ${
                styles.input
                }`}
            />
            {errors.name && touched.name && (
                <span className="text-red-500 pt-2 block">{errors.name}</span>
            )}
        </div>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your email
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="password">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value="Sign Up" className={`${styles.button}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          or Join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer" />
          <AiFillGithub size={30} className="cursor-pointer" />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Have an Account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Log In
          </span>
        </h5>
      </form>
    </div>
  );
};

export default SignUp;

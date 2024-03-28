'use client';

import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().required("Please enter password").min(6, "Password too short"),
});



const Login:FC<Props> = (props) => {
    const [ahow , setShow] = useState(false)
  return <div></div>;
};

export default Login;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useState } from "react";
import postData from "~/helpers/fetcher";
import type { LoginResponse } from "~/pages/api/login";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const RegisterForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);
  const router = useRouter();

  const onSubmit = async () => {
    if (email !== "" && password !== "" && name !== "") {
      const LoginRequest = {
        name: name,
        email: email,
        password: password
      };
      const LoginResponse = await postData("/api/login", LoginRequest) as LoginResponse;
      setCookies("token", LoginResponse.sessionId, { path: "/" });
      await router.replace("/");
    }
  };

  return (
    <div className="w-full h-screen bg-[#E2EEE2]">
      <div className=" w-[78%] h-[18%] flex items-center ml-auto mr-auto">
        <Image src="/logo.svg" width={100} height={100} alt="icon" />
        <h1 className="text-[#61B038] text-[40px] font-semibold">Register Form</h1>
        <div className=""></div>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} id="username"
               name="username" placeholder="Insert your username"
               className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] rounded-[15px] mb-[14.05%]" />
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id="email"
               name="email" placeholder="Insert your email"
               className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] ml-auto mr-auto" />
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="password"
               name="password" placeholder="Insert the password"
               className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] ml-auto mr-auto" />
      </div>
      <div className="">
        <button className="bg-[#72BA51] text-[#fff] w-" onClick={onSubmit}>Sign up</button>
      </div>
    </div>
  );
};

export default RegisterForm;
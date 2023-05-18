/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useState } from "react";
import postData from "~/helpers/fetcher";
import type { LoginResponse } from "~/pages/api/login";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";


const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);
  const router = useRouter();

  const onSubmit = async () => {
    if (email !== "" && password !== "") {
      const LoginRequest = {
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
      <div className="logo w-[78%] h-[18%] pt-[15%] flex items-center ml-auto mr-auto">
        <Image src="/logo.svg" width={150} height={150} alt="barilla" />
        <h1 className="text-[#61B038] text-[40px] ml-[14px] font-semibold">Login</h1>
      </div>
      <div className="form w-[78%] h-[22%] ml-auto mr-auto relative mt-[28%]">
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="email"
               id="email"
               className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] rounded-[15px] mb-[14.05%] placeholder:text-[#fff]/[0.6] placeholder:text-[24px] text-[24px] text-white"
               placeholder="Email" />
        <input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
               name="password" id="password"
               className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] rounded-[15px] placeholder:text-[#fff]/[0.6] placeholder:text-[24px] text-[24px] text-white"
               placeholder="Password" />
        <div className="w-full text-right">
          <a href="#" className="text-[#61B038] text-[16px]">Sign up</a>
        </div>
      </div>
      <div className="w-[78%] h-[60px] mr-auto ml-auto mt-[40px]">
        <button className="bg-[#72BA51] text-[#fff] w-[34.05%] h-[100%] rounded-[7px] text-[26px]"
                onClick={onSubmit}>Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
import Image from "next/image";

interface RegisterFormProp{
    username: string
    email: string
    password: string 
    onClick: () => void
}

export default function RegisterForm() {
    return (
        <div className="w-full h-screen bg-[#E2EEE2]">
            <div className=" w-[78%] h-[18%] flex items-center ml-auto mr-auto">
                <Image src="/logo.svg" width={100} height={100} alt="icon" />
                <h1 className="text-[#61B038] text-[40px] font-semibold">Register Form</h1>
                <div className=""></div>
                    <input type="text" id="username" name="username" placeholder="Insert your username" className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] rounded-[15px] mb-[14.05%]"/>
                    <input type="text" id="email" name="email" placeholder="Insert your email" className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] ml-auto mr-auto"/>
                    <input type="text" id="password" name="passowrd" placeholder="Insert the password" className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] ml-auto mr-auto"/>
                </div>
                <div className="">
                    <button className="bg-[#72BA51] text-[#fff] w-">Sign up</button>
                </div>
        </div>
    )
}
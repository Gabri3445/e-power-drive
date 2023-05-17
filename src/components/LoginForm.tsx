import Image from "next/image";

interface LoginFormProps {
    username: string;
    password: string;
    onClick: () => void;
}

export default function LoginForm() {
    return (
        <div className="w-full h-screen bg-[#E2EEE2]">
            <div className="logo w-[78%] h-[18%] flex items-center ml-auto mr-auto">
                <Image src="/logo.svg" width={150} height={150} alt="barilla" />
                <h1 className="text-[#61B038] text-[40px] ml-[14px] font-semibold">Login</h1>
            </div>        
            <div className="form w-[78%] h-[22%] ml-auto mr-auto relative mt-[28%]">
                <input type="text" name="username" id="username" className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] rounded-[15px] mb-[14.05%] placeholder:text-[#fff]/[0.6] placeholder:text-[24px]" placeholder="Username"/>
                <input type="password" name="password" id="password" className="bg-[#77BD52]/[0.6] w-[100%] h-[66px] rounded-[15px] placeholder:text-[#fff]/[0.6] placeholder:text-[24px]" placeholder="Password"/>
                <div className="w-full text-right">
                    <a href="#" className="text-[#61B038] text-[16px]">Sign up</a>
                </div>                
            </div>    
            <div className="w-[78%] h-[60px] mr-auto ml-auto mt-[40px]">
                <button className="bg-[#72BA51] text-[#fff] w-[34.05%] h-[100%] rounded-[7px] text-[26px]">Login</button>
            </div>
        </div>
    )
}
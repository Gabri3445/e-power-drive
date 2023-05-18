import Image from "next/image"


interface userProps{
    username: string 
    user_pic : string
    rent_vehicles: number
    mileage: number
    total_spent: number
    total_time: number
}

const User = ({username, user_pic, rent_vehicles, mileage, total_spent, total_time} : userProps) =>{
    return (
        <div className="h-screen relative">
            <div className="w-[86.95%] h-[85%] ml-auto mr-auto">
                <div className="h-[50%] text-center">
                    <h1 className="font-semibold text-[40px] text-[#61B038]">User Info</h1>
                    <Image width={135} height={135} src={user_pic} alt="user-img" className="ml-auto mr-auto"/>
                    <p className="font-semibold text-[40px] text-[#61B038]">Hello {username}</p>
                </div>

                <div className="h-[50%]">
                    <div className="flex justify-between">
                        <div className="bg-[#A5EB95] w-[170px] h-[170px] rounded-[25px] flex flex-col justify-center items-center">
                            <p className="font-semibold text-[40px]">{rent_vehicles}</p>
                            <p className="font-semibold text-[24px]">Rent Vehicles</p>
                        </div>
                        <div className="bg-[#A5EB95] w-[170px] h-[170px] rounded-[25px] flex flex-col justify-center items-center">
                            <p className="font-semibold text-[40px]">{mileage}Km</p>
                            <p className="font-semibold text-[24px]">Mileage</p>          
                        </div>
                    </div>        
                    <div className="flex justify-between mt-[29px]">
                        <div className="bg-[#A5EB95] w-[170px] h-[170px] rounded-[25px] flex flex-col justify-center items-center">
                            <p className="font-semibold text-[40px]">€{total_spent}</p>
                            <p className="font-semibold text-[24px]">Total spent</p>
                        </div>
                        <div className="bg-[#A5EB95] w-[170px] h-[170px] rounded-[25px] flex flex-col justify-center items-center">
                            <p className="font-semibold text-[40px]">{total_time}h</p>
                            <p className="font-semibold text-[24px]">Total time</p>
                        </div>
                    </div>                        
                </div>
            </div>
        </div>
    )
}

export default User
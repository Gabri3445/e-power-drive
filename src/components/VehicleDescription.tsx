import Image from "next/image";
import Battery from "public/vehicles/icons/battery.png";
import Speed from "public/vehicles/icons/speed.png";
import LicensePlate from "public/vehicles/icons/license-plate.png";
import Euro from "public/vehicles/icons/euro.png";


interface VehicleDescription {
  type: string;
  vehicle_image: string;
  battery_percentage: string;
  km_traveled: number;
  license_plate: string;
  price_km: number;
  type_image: string;
}

const VehicleDescription = (props: VehicleDescription) => {
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.display = "none";
    }} className="w-screen h-screen absolute top-0 left-0 bg-black/[0.5]">
      <div
        className="overflow-auto w-[73.91%] h-[72.42%] absolute bg-white rounded-[21px] left-0 right-0 ml-auto mr-auto bottom-[23px]">
        <div className="w-[73.2%] h-full ml-auto mr-auto">

          <div className="GrayDrag w-[100%] h-[15px] mt-[7px] mb-[14px]">
            <div className="bg-stone-600 w-[40%] h-[5px] ml-auto mr-auto rounded"></div>
          </div>

          <h3 className="font-semibold text-2xl mb-9 pt-5">Your vehicle</h3>
          <Image width={150} height={113} src={props.vehicle_image} alt="sas" className="ml-auto mr-auto" />
          <div className="flex items-center mb-4 mt-3">
            <Image width={40} height={40} src={props.type_image} alt="type-img" />
            <p className="text-2xl font-semibold ml-[14px]">{props.type}</p>
          </div>
          <div className="flex items-center mb-4">
            <Image width={40} height={40} src={Battery} alt="battery-img" />
            <p className="text-2xl font-semibold ml-[14px]">{props.battery_percentage}</p>
          </div>
          <div className="flex items-center mb-4">
            <Image width={40} height={40} src={Speed} alt="km-traveled" />
            <p className="text-2xl font-semibold ml-[14px]">{props.km_traveled}</p>
          </div>
          <div className="flex items-center mb-4">
            <Image width={40} height={40} src={LicensePlate} alt="km-traveled" />
            <p className="text-2xl font-semibold ml-[14px]">{props.license_plate}</p>
          </div>
          <div className="flex items-center mb-4">
            <Image width={40} height={40} src={Euro} alt="price-km" />
            <p className="text-2xl font-semibold ml-[14px]">{props.price_km}</p>
          </div>
          <div className="w-[70.53%] h-[51px] ml-auto mr-auto mt-[75px]">
            <button className="bg-[#72BA51] text-[#fff] w-full h-full rounded-[11px] text-[24px]">Book Vehicle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDescription;

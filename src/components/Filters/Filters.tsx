import Filter from "~/components/Filters/Filter";
import Car from "public/filtersIcons/car.png";
import MotorBike from "public/filtersIcons/motorbike.png"
import ElectricScooter from "public/filtersIcons/electric_scooter.png"
import Bike from "public/filtersIcons/bike.png"


const Filters = () => {
    return (
        <div className="Filters absolute z-0 bottom-6 left-0 right-0 ml-auto mr-auto w-[81.4%] h-[69px] bg-[#72BA51] rounded-[18px] flex justify-around items-center">
          <Filter src={ElectricScooter.src} />
          <Filter src={Bike.src} />
          <Filter src={MotorBike.src} />
          <Filter src={Car.src} />
        </div>
    )
  //TODO split in components
  /*
    - OnClick(sender) on each filter
   */
}

export default Filters
import Image from "next/image";


interface Filter {
  src: string;
  // onFilterClick: () => void
}

export default function Filter(props: Filter) {
  return (
    <div onClick={(e) => {
      e.currentTarget.classList.toggle("bg-[#A5EB95]");
      e.currentTarget.classList.toggle("bg-[#fff]");
    }} className="Filter flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#fff]">
      <Image width={30} height={40} src={props.src} alt={"vehicle_icon"} />
    </div>
  );
}
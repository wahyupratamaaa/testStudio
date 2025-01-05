import Navbar from "../Layout/navbar";
import { HiOutlineHome } from "react-icons/hi2";

import { SlArrowRight } from "react-icons/sl";

export default function Section() {
  return (
    <div>
      <Navbar />
      <div className="text-xl pt-[160px] px-16 py-10">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <HiOutlineHome className="w-5 h-auto" />
          <span>Bedanda</span>
          <SlArrowRight className="w-5 h-3" />
          <span>Nasional</span>
          <SlArrowRight className="w-5 h-3" />
          <span>Detail</span>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react"; // Import useState dari React
import { CiCalendar } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

export default function Section() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      window.open("/Detail", "_blank");
    }, 500); // Delay untuk memberi waktu overlay muncul
  };

  return (
    <div className="w-screen h-auto px-16 py-10 pt-[160px]">
      <div className="flex gap-3 justify-between">
        <div className="flex flex-col gap-5 w-[450px]">
          <h1>Headline</h1>
          <p className="text-4xl font-medium text-gray-700">
            Transformasi ke Perusahaan Teknologi, ISAT Catat Kinerja Kinclong
          </p>
          <p className="font-normal text-gray-500">
            PT. Indosat Tbk (ISAT) atau Indosat Ooredoo Hutchison (Indosat atau
            IOH) mencatatkan total pendapatan sebesar Rp 41,8 triliun atau
            tumbuh 11,6% secara tahunan hingga kuartal III-2024.
          </p>
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-1 text-gray-500 font-normal">
              <CiCalendar className="h-5 w-5" /> 6 Januari 2025
            </span>
            <a
              href="/Detail"
              className="text-blue-500 font-normal flex items-center gap-1"
            >
              Baca Selengkapnya{" "}
              <GoArrowUpRight className="w-6 h-6 hover:animate-ping" />
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/indosat.jpeg"
            alt="talent"
            className="h-96 rounded-lg cursor-pointer transform transition duration-500 ease-in-out hover:scale-90 hover:rotate-3 hover:shadow-xl "
            onClick={handleImageClick}
          />
          {showOverlay && (
            <div
              className="absolute inset-0 flex items-center justify-center 
                 ease-in-out"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}

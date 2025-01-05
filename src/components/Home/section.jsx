import { CiCalendar } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

export default function Section() {
  return (
    <div className="w-screen h-auto px-16 py-10 pt-[160px]">
      <div className="flex gap-3 justify-between">
        <div className="flex flex-col gap-5 w-[450px]">
          <h1>Headline</h1>
          <p className="text-4xl font-medium text-gray-700">
            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
            Kualifikasi
          </p>
          <p className="font-normal text-gray-500">
            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang
            Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK)
            apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
          </p>
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-1 text-gray-500 font-normal">
              <CiCalendar className="h-5 w-5" /> 5 Juni 2023
            </span>
            <span className="text-blue-500 font-normal flex items-center gap-1 ">
              Baca Selengkapnya <GoArrowUpRight className="w-6 h-6" />
            </span>
          </div>
        </div>

        <div>
          <img src="/Image.png" alt="talent" className="h-96" />
        </div>
      </div>
    </div>
  );
}

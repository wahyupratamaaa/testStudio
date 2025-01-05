export default function Comment() {
  return (
    <div className="flex gap-3 items-center px-16 py-10 mb-10">
      <div className="flex flex-col gap-10 w-full">
        {/* Header Komentar */}
        <div className="flex items-center gap-4">
          <div className="border-l-[5px] border-blue-500 h-10"></div>
          <span className="text-gray-700 text-3xl font-semibold">Komentar</span>
        </div>

        {/* Form Komentar */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <img
            src="/Image.png"
            alt="talent"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex flex-col w-full md:w-5/12">
            <div className="w-full h-32 border border-gray-300 rounded-lg px-4 py-2">
              <span className="text-gray-500 text-sm block">
                Apa yang ingin anda tanyakan
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-7">
                Kirim
              </button>
              <span className="text-gray-500 text-sm">0/50</span>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <hr className="border-gray-300 w-1/2" />

        {/* Komentar 1 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <img
            src="/Image.png"
            alt="talent"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex flex-col w-full md:w-5/12">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm uppercase font-medium">
                Wahyu Kedua S.Kom M.Kom
              </span>
              <span className="text-gray-500 text-sm">• 5 Juni 2023</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh? Karena
              saya mau download ada konfirmasi bahwa TOTP aktivasi salah.
              Bagaimana ya solusinya?
            </p>
            <span className="text-[#0090FF] cursor-pointer mt-2">Balas</span>

            {/* Balasan */}
            <div className="flex gap-3 mt-4">
              <img
                src="/Image.png"
                alt="talent"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm uppercase font-medium">
                    John Doe
                  </span>
                  <span className="text-gray-500 text-sm">• 6 Juni 2023</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Saya mengunduh sertifikatnya kok juga belum bisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

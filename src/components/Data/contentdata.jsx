export default function Contentdata() {
  const newsItems = [
    {
      title:
        "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
      category: "Politik",
      date: "5 Juni 2023",
      image: "/Image.png",
    },
    {
      title:
        "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
      category: "Politik",
      date: "5 Juni 2023",
      image: "/Image.png",
    },
    {
      title:
        "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
      category: "Politik",
      date: "5 Juni 2023",
      image: "/Image.png",
    },
    {
      title:
        "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
      category: "Politik",
      date: "5 Juni 2023",
      image: "/Image.png",
    },
  ];
  return (
    <div className="px-16 py-10 mt-10 ">
      <div className="flex gap-10">
        <div className="flex flex-col gap-8 w-6/12">
          <span className="text-4xl font-semibold text-gray-600">
            Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
            Session di RSUD Dr. Soetomo
          </span>
          <div className="flex gap-2 text-sm">
            <span className="text-[#0090FF] font-semibold">Politik</span>
            {"•"}
            <span className="text-gray-500">5 Juni 2023</span>
          </div>
          <div>
            <div className="w-full">
              <img src="/Image.png" alt="talent" className="w-full" />
              <span className="text-sm text-gray-500 block mt-2">
                Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah
                kandang. (CNN Indonesia/Adhi Wicaksono)
              </span>
            </div>
          </div>
          <div>
            <span className="block text-justify leading-relaxed text-sm w-full">
              <p>
                Jakarta, CNN Indonesia -- Ketua Badan Tim Nasional (BTN) PSSI
                Sumardji merespons peluang Timnas Indonesia pindah dari Stadion
                Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga
                Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan
                Stadion GBK yang jadi markas Indonesia dalam babak kedua
                Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan
                kandang pertama melawan Vietnam, Maret lalu, rumput GBK rusak
                parah. PPKGBK sebagai pengelola pun mendapat kritik deras.
              </p>
              <p className="mt-4">
                Acara-acara di luar sepak bola itu kerap membuat kondisi rumput
                tidak sehat dan tidak terlihat bagus saat pertandingan,
                khususnya laga Timnas Indonesia. Sampai saat melawan Irak,
                rumput GBK tidak terlihat sempurna meskipun kondisinya lebih
                bagus dibanding lawan Vietnam. Opsi pindah kandang pun muncul.
                "Nanti kami akan sampaikan [rencana pindah dari GBK]," ujar
                Sumardji saat ditanya kemungkinan menggunakan stadion lain di
                putaran ketiga kualifikasi.
              </p>
              <p className="mt-4">
                Sumardji tidak membantah kondisi rumput GBK yang masih kurang
                bagus dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK
                bisa lebih memperhatikan kondisi rumput untuk pertandingan Skuad
                Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK
                karena kondisi rumput kemarin kurang bagus, kami memohon ke
                pihak GBK supaya betul-betul disiapkan dan diperhatikan kondisi
                rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi
                rumput GBK kayaknya stres itu, sehingga dengan kondisi itu akan
                memengaruhi, tadi saya telepon supaya diperhatikan," kata
                Sumardji menambahkan.
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <div className="border-l-[5px] border-blue-500 h-10"></div>
            <span className="text-gray-700 text-3xl font-semibold">
              Berita Terpopuler
            </span>
          </div>
          {newsItems.map((item, index) => (
            <div key={index} className="flex gap-5 w-full sm:w-auto">
              <img
                src={item.image}
                alt="Image"
                className="w-[147px] h-[100px] rounded-md"
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-800 w-1/2">
                  {item.title}
                </span>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-semibold text-sm">
                    {item.category}
                  </span>
                  {"•"}
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

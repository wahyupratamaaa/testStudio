import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TbPointFilled } from "react-icons/tb";

const fetchTechNews = async () => {
  const { data } = await axios.get(
    "https://api-berita-indonesia.vercel.app/cnbc/tech/"
  );
  return data.data.posts.slice(13, 17);
};

const getCategoryFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("id-ID", options).replace(",", "");
};

const TechNews = () => {
  const {
    data: newsItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["techNews"],
    queryFn: fetchTechNews,
  });

  const apiUrl = "https://api-berita-indonesia.vercel.app/cnbc/tech/";
  const category = getCategoryFromUrl(apiUrl);

  if (isLoading) return <div className="self-center">Loading...</div>;
  if (isError) return <div>Error loading data...</div>;

  return (
    <div className="px-16 py-10 mt-10 ">
      <div className="flex gap-10">
        <div className="flex flex-col gap-8 w-6/12">
          <span className="text-4xl font-semibold text-gray-600">
            Transformasi ke Perusahaan Teknologi, ISAT Catat Kinerja Kinclong
          </span>
          <div className="flex gap-2 text-sm">
            <span className="text-[#0090FF] font-semibold">Politik</span>
            {"•"}
            <span className="text-gray-500">6 Januari 2025</span>
          </div>
          <div>
            <div className="w-full">
              <img
                src="/indosat.jpeg"
                alt="talent"
                className="w-full rounded-lg"
              />
              <span className="text-sm text-gray-500 block mt-2">
                Foto: Indosat Ooredoo Hutchison (Istimewa)
              </span>
            </div>
          </div>
          <div>
            <span className="block text-justify leading-relaxed text-sm w-full">
              <p>
                PT. Indosat Tbk (ISAT) atau Indosat Ooredoo Hutchison (Indosat
                atau IOH) mencatatkan total pendapatan sebesar Rp 41,8 triliun
                atau tumbuh 11,6% secara tahunan hingga kuartal III-2024. Di
                sisi lain, EBITDA juga menunjukkan pertumbuhan atau meningkat
                15% secara tahunan menjadi Rp 20 triliun dan menjadikan EBITDA
                margin perusahaan sebesar 47,8%. Secara berturut-turut, segmen
                bisnis Selular, Multimedia, Data Communication, Internet (MIDI),
                dan Fixed Telecommunications berkontribusi terhadap pendapatan
                sebesar 84,3%, 14,1%, dan 1,6%. Dominasi layanan seluler yang
                terus meningkat terlihat dari persentasenya sebesar 9,5% secara
                tahunan, yang terlihat dari peningkatan penggunaan data,
                sementara segmen MIDI menunjukkan peningkatan signifikan sebesar
                30,2% yang didorong oleh Fixed Internet, Fixed Connectivity, dan
                IT Services. President Director and CEO Indosat Ooredoo
                Hutchison, Vikram Sinha, mengatakan, pergeseran ke arah
                penyediaan solusi berbasis artificial intelligence (AI) dan
                digital menjadikan MIDI sebagai kontributor penting bagi bisnis
                Indosat secara keseluruhan.
              </p>

              <p className="mt-4">
                "Hasil ini mencerminkan upaya kami dalam menonjolkan keunggulan
                operasional, alokasi modal yang strategis, dan memanfaatkan
                transformasi berbasis-AI," ujarnya belum lama ini.
              </p>

              <p className="mt-4">
                Untuk diketahui, belanja modal strategis perusahaan menjadi
                kunci pencapaian ini. Di bawah pengawasan Vikram, Indosat
                melakukan transformasi integrasi AI, hal ini dilakukan sebagai
                inisiasi untuk mengoptimalkan operasional, mendorong inovasi,
                dan meningkatkan pengalaman pelanggan. Indosat pun akan terus
                fokus pada pengembangan teknologi artificial intelligence (AI).
                Implementasinya akan menyeluruh, baik untuk kebutuhan internal
                dan eksternal, yang bertujuan untuk meningkatkan layanan
                pelanggan. Indosat juga menjalin kemitraan strategis dengan
                perusahaan global seperti NVIDIA, Microsoft, Google, Mastercard,
                dan Huawei untuk mendukung inisiatif ini. "Indosat melanjutkan
                kerja sama strategis jangka panjang dengan tujuan mendukung
                transformasi Indosat dari Telco menjadi AI TechCo," terang
                Vikram. Beberapa pencapaian penting termasuk peluncuran AI
                Experience Center dan GPU Merdeka oleh Lintasarta, anak
                perusahaan Indosat, yang menyediakan layanan cloud berbasis AI.
                Sementara itu, bersama Microsoft, Indosat menggunakan Copilot
                for Microsoft 365, asisten kecerdasan buatan terintegrasi.
              </p>

              <p className="mt-4">
                Dengan langkah ini, Indosat meningkatkan produktivitas dan
                menghubungkan masyarakat di Indonesia. Copilot for Microsoft 365
                menyederhanakan berbagai pekerjaan dengan fitur
                produktivitasnya, seperti mengatur jadwal pertemuan, merangkum
                notulen rapat, menyiapkan email, dan lainnya. Kini,
                penggunaannya telah diadopsi oleh berbagai divisi mulai dari
                digital, sumber daya manusia, business-to-business, hingga
                jaringan. Sebelumnya Indosat juga sempat meluncurkan platform
                Merdeka Cloud yang didukung Nvidia dan Accenture untuk
                memperkuat kedaulatan digital dan membuka peluang ekonomi
                melalui pemanfaatan teknologi AI. Adapun Merdeka Cloud disebut
                dapat mendemokratisasi AI untuk semua perusahaan. {""}
                <a
                  href="https://www.cnbcindonesia.com/tech/20250106165924-37-601127/transformasi-ke-perusahaan-teknologi-isat-catat-kinerja-kinclong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer"
                >
                  <strong>Baca selengkapnya</strong>
                </a>
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
          {newsItems && newsItems.length > 0 ? (
            newsItems.map((item, index) => (
              <div
                key={`${index}-${item.link}`}
                className="flex gap-5 w-full sm:w-auto relative cursor-pointer"
                onClick={() => window.open(item.link, "_blank")}
              >
                <img
                  src={item.thumbnail}
                  alt="Image"
                  className="w-[147px] h-[100px] rounded-md"
                />
                <div className="bg-[#1F2B39] w-9 h-9 absolute -top-2 -left-2 rounded-full flex items-center justify-center">
                  <span className=" text-white self-center">{1 + index}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-800 w-1/2">
                    {item.title}
                  </span>
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-semibold text-sm">
                      {category[0].toUpperCase() + category.slice(1)}
                    </span>
                    <TbPointFilled className="text-gray-500 self-center" />
                    <span className="text-gray-500 text-sm">
                      {formatDate(item.pubDate)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No popular news available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechNews;

// export default function Contentdata() {
//   const newsItems = [
//     {
//       title:
//         "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
//       category: "Politik",
//       date: "5 Juni 2023",
//       image: "/Image.png",
//     },
//     {
//       title:
//         "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
//       category: "Politik",
//       date: "5 Juni 2023",
//       image: "/Image.png",
//     },
//     {
//       title:
//         "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
//       category: "Politik",
//       date: "5 Juni 2023",
//       image: "/Image.png",
//     },
//     {
//       title:
//         "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
//       category: "Politik",
//       date: "5 Juni 2023",
//       image: "/Image.png",
//     },
//   ];
//   return (
//     <div className="px-16 py-10 mt-10 ">
//       <div className="flex gap-10">
//         <div className="flex flex-col gap-8 w-6/12">
//           <span className="text-4xl font-semibold text-gray-600">
//             Transformasi ke Perusahaan Teknologi, ISAT Catat Kinerja Kinclong
//           </span>
//           <div className="flex gap-2 text-sm">
//             <span className="text-[#0090FF] font-semibold">Politik</span>
//             {"•"}
//             <span className="text-gray-500">6 Januari 2025</span>
//           </div>
//           <div>
//             <div className="w-full">
//               <img
//                 src="/indosat.jpeg"
//                 alt="talent"
//                 className="w-full rounded-lg"
//               />
//               <span className="text-sm text-gray-500 block mt-2">
//                 Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah
//                 kandang. (CNN Indonesia/Adhi Wicaksono)
//               </span>
//             </div>
//           </div>
//           <div>
//             <span className="block text-justify leading-relaxed text-sm w-full">
//               <p>
//                 PT. Indosat Tbk (ISAT) atau Indosat Ooredoo Hutchison (Indosat
//                 atau IOH) mencatatkan total pendapatan sebesar Rp 41,8 triliun
//                 atau tumbuh 11,6% secara tahunan hingga kuartal III-2024. Di
//                 sisi lain, EBITDA juga menunjukkan pertumbuhan atau meningkat
//                 15% secara tahunan menjadi Rp 20 triliun dan menjadikan EBITDA
//                 margin perusahaan sebesar 47,8%. Secara berturut-turut, segmen
//                 bisnis Selular, Multimedia, Data Communication, Internet (MIDI),
//                 dan Fixed Telecommunications berkontribusi terhadap pendapatan
//                 sebesar 84,3%, 14,1%, dan 1,6%. Dominasi layanan seluler yang
//                 terus meningkat terlihat dari persentasenya sebesar 9,5% secara
//                 tahunan, yang terlihat dari peningkatan penggunaan data,
//                 sementara segmen MIDI menunjukkan peningkatan signifikan sebesar
//                 30,2% yang didorong oleh Fixed Internet, Fixed Connectivity, dan
//                 IT Services. President Director and CEO Indosat Ooredoo
//                 Hutchison, Vikram Sinha, mengatakan, pergeseran ke arah
//                 penyediaan solusi berbasis artificial intelligence (AI) dan
//                 digital menjadikan MIDI sebagai kontributor penting bagi bisnis
//                 Indosat secara keseluruhan.
//               </p>

//               <p className="mt-4">
//                 "Hasil ini mencerminkan upaya kami dalam menonjolkan keunggulan
//                 operasional, alokasi modal yang strategis, dan memanfaatkan
//                 transformasi berbasis-AI," ujarnya belum lama ini.
//               </p>

//               <p className="mt-4">
//                 Untuk diketahui, belanja modal strategis perusahaan menjadi
//                 kunci pencapaian ini. Di bawah pengawasan Vikram, Indosat
//                 melakukan transformasi integrasi AI, hal ini dilakukan sebagai
//                 inisiasi untuk mengoptimalkan operasional, mendorong inovasi,
//                 dan meningkatkan pengalaman pelanggan. Indosat pun akan terus
//                 fokus pada pengembangan teknologi artificial intelligence (AI).
//                 Implementasinya akan menyeluruh, baik untuk kebutuhan internal
//                 dan eksternal, yang bertujuan untuk meningkatkan layanan
//                 pelanggan. Indosat juga menjalin kemitraan strategis dengan
//                 perusahaan global seperti NVIDIA, Microsoft, Google, Mastercard,
//                 dan Huawei untuk mendukung inisiatif ini. "Indosat melanjutkan
//                 kerja sama strategis jangka panjang dengan tujuan mendukung
//                 transformasi Indosat dari Telco menjadi AI TechCo," terang
//                 Vikram. Beberapa pencapaian penting termasuk peluncuran AI
//                 Experience Center dan GPU Merdeka oleh Lintasarta, anak
//                 perusahaan Indosat, yang menyediakan layanan cloud berbasis AI.
//                 Sementara itu, bersama Microsoft, Indosat menggunakan Copilot
//                 for Microsoft 365, asisten kecerdasan buatan terintegrasi.
//               </p>
//               <p className="mt-4">
//                 Dengan langkah ini, Indosat meningkatkan produktivitas dan
//                 menghubungkan masyarakat di Indonesia. Copilot for Microsoft 365
//                 menyederhanakan berbagai pekerjaan dengan fitur
//                 produktivitasnya, seperti mengatur jadwal pertemuan, merangkum
//                 notulen rapat, menyiapkan email, dan lainnya. Kini,
//                 penggunaannya telah diadopsi oleh berbagai divisi mulai dari
//                 digital, sumber daya manusia, business-to-business, hingga
//                 jaringan. Sebelumnya Indosat juga sempat meluncurkan platform
//                 Merdeka Cloud yang didukung Nvidia dan Accenture untuk
//                 memperkuat kedaulatan digital dan membuka peluang ekonomi
//                 melalui pemanfaatan teknologi AI. Adapun Merdeka Cloud disebut
//                 dapat mendemokratisasi AI untuk semua perusahaan.
//               </p>
//             </span>
//           </div>
//         </div>

//         <div className="flex flex-col gap-10">
//           <div className="flex items-center gap-4">
//             <div className="border-l-[5px] border-blue-500 h-10"></div>
//             <span className="text-gray-700 text-3xl font-semibold">
//               Berita Terpopuler
//             </span>
//           </div>
//           {newsItems.map((item, index) => (
//             <div key={index} className="flex gap-5 w-full sm:w-auto relative">
//               <img
//                 src={item.image}
//                 alt="Image"
//                 className="w-[147px] h-[100px] rounded-md"
//               />
//               <div className="bg-[#1F2B39] w-9 h-9 absolute -top-2 -left-2 rounded-full flex items-center justify-center">
//                 <span className=" text-white self-center">{1 + index}</span>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <span className="text-sm text-gray-800 w-1/2">
//                   {item.title}
//                 </span>
//                 <div className="flex gap-3">
//                   <span className="text-blue-500 font-semibold text-sm">
//                     {item.category}
//                   </span>
//                   {"•"}
//                   <span className="text-gray-500 text-sm">{item.date}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

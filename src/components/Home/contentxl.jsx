export default function Contentxl() {
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
    <div className="w-screen px-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="border-l-[5px] border-blue-500 h-10"></div>
          <span className="text-gray-700 text-3xl font-semibold">
            Rekomendasi untuk anda
          </span>
        </div>
        {/* Grid untuk 4 kartu per baris */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white p-5 rounded-md "
            >
              <img
                src={item.image}
                alt="Image"
                className="w-full h-auto rounded-md"
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-800">{item.title}</span>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-semibold text-sm">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[400px] bg-[#00CAA3] rounded-3xl px-16 py-10 text-white">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-5 w-[426px]">
              <span className="text-4xl font-bold w-full">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </span>
              <span className="w-full">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </span>
            </div>

            <div>
              <img
                src="/Right.png"
                alt="travelling"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

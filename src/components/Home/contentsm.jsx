export default function Contentsm() {
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
    <div className="w-screen px-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="border-l-[5px] border-blue-500 h-10"></div>
          <span className="text-gray-700 text-3xl font-semibold">
            Berita Terpopuler
          </span>
        </div>
        <div className="flex  gap-5">
          {newsItems.map((item, index) => (
            <div key={index} className="flex gap-5 w-full sm:w-auto">
              <img
                src={item.image}
                alt="Image"
                className="w-[147px] h-[100px] rounded-md"
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-800 w-50">{item.title}</span>
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

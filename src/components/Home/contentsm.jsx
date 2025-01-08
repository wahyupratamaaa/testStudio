import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TbPointFilled } from "react-icons/tb";

const fetchTechNews = async () => {
  const { data } = await axios.get(
    "https://api-berita-indonesia.vercel.app/cnbc/tech/"
  );
  return data.data.posts.slice(16, 20);
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

  return (
    <div className="w-screen px-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="border-l-[5px] border-blue-500 h-10"></div>
          <span className="text-gray-700 text-3xl font-semibold">
            Berita Terpopuler - {category.toUpperCase()}
          </span>
        </div>
        <div className="flex gap-5">
          {Array.isArray(newsItems) && newsItems.length > 0 ? (
            newsItems.map((item, index) => (
              <div
                key={`${index}-${item.link}`}
                className="flex gap-5 w-full sm:w-auto relative cursor-pointer"
                onClick={() => window.open(item.link, "_blank")}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-[147px] h-[100px] rounded-md"
                />
                <div className="bg-[#1F2B39] w-9 h-9 absolute -top-2 -left-2 rounded-full flex items-center justify-center">
                  <span className="text-white self-center">{1 + index}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-800 w-50">
                    {item.title}
                  </span>
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-semibold text-sm">
                      {category[0].toUpperCase() + category.slice(1)}
                    </span>
                    <TbPointFilled className="w-3 h-3 self-center" />
                    <span className="text-gray-500 text-xs self-center">
                      {formatDate(item.pubDate)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No news available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechNews;

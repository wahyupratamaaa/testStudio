import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TbPointFilled } from "react-icons/tb";

// Ubah nama variabel untuk fetch data dengan lebih spesifik
const fetchTechArticles = async () => {
  const { data } = await axios.get(
    "https://api-berita-indonesia.vercel.app/cnbc/tech/"
  );
  return data.data.posts.slice(0, 3); // Menampilkan hanya 3 data pertama
};

// Ubah nama fungsi getCategoryFromUrl
const extractCategoryFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

// Ubah nama fungsi formatDate
const formatArticleDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("id-ID", options).replace(",", "");
};

const TechNewsComponent = () => {
  // Ubah query key menjadi lebih spesifik
  const {
    data: techArticles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["techArticlesData"], // Pastikan query key unik
    queryFn: fetchTechArticles,
  });

  const apiUrl = "https://api-berita-indonesia.vercel.app/cnbc/tech/";
  const category = extractCategoryFromUrl(apiUrl);

  return (
    <div className="flex gap-3 items-center px-16 py-10 ">
      <div className="flex flex-col">
        <div className="flex justify-between w-1/2">
          <div className="flex items-center gap-4">
            <div className="border-l-[5px] border-blue-500 h-10"></div>
            <span className="text-gray-700 text-3xl font-semibold">
              Berita Terkait
            </span>
          </div>
          <button
            className="bg-[#c6e5ff] text-blue-600 px-5 py-3 rounded-lg border border-blue-400 hover:bg-blue-400 hover:animate-pulse hover:text-white "
            onClick={() => (window.location.href = "/")}
          >
            Lihat Semua
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {techArticles?.map((item, index) => (
            <div
              key={`${index}-${item.link}`}
              className="flex flex-col gap-4 bg-white p-5 rounded-md cursor-pointer"
              onClick={() => window.open(item.link, "_blank")}
            >
              <img
                src={item.thumbnail}
                alt="Image"
                className="w-full h-auto rounded-md"
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-800">{item.title}</span>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-semibold text-sm">
                    {category[0].toUpperCase() + category.slice(1)}
                  </span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">
                    {formatArticleDate(item.pubDate)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechNewsComponent;

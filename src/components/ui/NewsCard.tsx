import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NewsCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  imageWidth?: string;
  imageHeight?: string;
  link?: string;
  imageClassName?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  category,
  date,
  title,
  link,
  imageClassName,
}) => {
  return (
    <article className="flex flex-col">
      <img
        src={image}
        className={cn("w-full rounded-xl object-cover", imageClassName)}
        alt={title}
      />
      <div className="mt-4 flex flex-col">
        <div className="flex items-center gap-4">
          <Link
            to={link}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="rounded border border-[#03C04A] px-4 py-1 text-[#414042] text-[18px] font-semibold leading-[34px] font-proxima"
          >
            {category}
          </Link>
          <div className="text-[#414042] text-[16px] font-semibold leading-[34px] font-proxima">
            {date}
          </div>
        </div>
        <h3 className="mt-2 text-[#222222] text-[16px] font-semibold leading-[25px]  font-proxima">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default NewsCard;

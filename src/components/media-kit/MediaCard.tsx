import { MediaItem } from "@/utils/mediaItems";
import { Download, FileVideo, FileImage, FileText } from "lucide-react";

export default function MediaCard({ item }: { item: MediaItem }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.href = item.src;
    link.download = item.title;
    link.click();
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white dark:bg-gray-900">
      <div className="w-full aspect-[4/3] overflow-hidden">
        {item.type === "image" && (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        )}
        {item.type === "video" && (
          <video
            src={item.src}
            controls
            poster={item.thumbnail}
            className="w-full h-full object-cover"
          />
        )}
        {(item.type === "pdf" || item.type === "zip") && (
          <img
            src={item.thumbnail || "/assets/pdf-placeholder.png"}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            {item.type === "pdf" && <FileText size={18} />}
            {item.type === "image" && <FileImage size={18} />}
            {item.type === "video" && <FileVideo size={18} />}
            <span className="capitalize text-sm">{item.type}</span>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Download size={16} /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

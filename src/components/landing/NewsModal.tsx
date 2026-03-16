import { NewsModalProps } from "@/utils/types";
import { CloseIcon } from "@/components/svg-icons";

const NewsModal: React.FC<NewsModalProps> = ({
  latestNews,
  openedIndex,
  handleClose,
}) => {
  return (
    <div className="absolute top-10 z-10 flex items-center justify-center opacity-90 xl:px-4">
      <div className="relative w-full bg-white p-4 md:p-12 rounded-[20px] shadow-lg overflow-y-auto max-h-[70vh] xl:max-h-[90vh]">
        <button
          onClick={() => handleClose(null)}
          className="absolute top-1 right-1 bg-black rounded-full w-6 h-6 xl:w-10 xl:h-10 flex items-center justify-center z-10"
        >
          <CloseIcon />
        </button>

        <div className="flex items-center mb-6 gap-3 md:gap-6 text-2xl md:text-3xl font-bold">
          <img
            src="/lovable-uploads/futran_icon.svg"
            className="w-8 md:w-12 object-contain"
            alt="Futran icon"
          />
          <h2 className="font-neue md:font-proxima leading-tight">
            {latestNews[openedIndex].Title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <div className="border border-[#03C04A] px-4 py-1 text-[#414042] text-sm md:text-base font-semibold font-proxima rounded">
            {latestNews[openedIndex].Category}
          </div>
          <div className="text-[#414042] text-sm md:text-base font-semibold font-proxima">
            {latestNews[openedIndex].Date}
          </div>
        </div>

        <p
          className="text-lg leading-7 tracking-wide font-neue md:font-proxima pt-6"
          dangerouslySetInnerHTML={{
            __html: latestNews[openedIndex].Content,
          }}
        />
      </div>
    </div>
  );
};

export default NewsModal;

import { useRef, useState } from "react";
import NewsCard from "@/components/ui/NewsCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import NewsModal from "@/components/landing/NewsModal";
import { latestNews } from "@/utils/staticData";

const NewsSection: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [openedIndex, setOpenedIndex] = useState(null);

  return (
    <section className="py-10 md:py-20 px-[120px] w-full max-md:px-5">
      <div className="w-full mb-8">
        <div className="flex flex-col md:flex-row w-full items-center md:items-center justify-between mb-4 gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/futran_icon.svg"
              className="md:w-12 md:h-12 h-[30px] w-[30px] object-contain"
              alt="News icon"
            />
            <h2 className="text-[#1C3562] text-[36px] font-bold font-proxima">
              Latest News
            </h2>
          </div>
          {/* <PrimaryButton
            variant="outline"
            size="lg"
            className="hidden lg:flex text-[#414042] text-[18px] font-semibold"
          >
            Visit Now
          </PrimaryButton> */}
        </div>
        <p className="text-[#414042] md:text-[20px] font-normal leading-[34px] tracking-[0.01em] font-neue md:font-proxima text-center md:text-left">
          Stay up-to-date with the latest developments in Futran’s journey to
          revolutionize urban mobility. From new partnerships to technological
          innovations, our newsroom provides insights into how we’re shaping the
          future of transportation. Visit now to explore our breakthroughs and
          contributions to modern transit solutions.
        </p>
      </div>
      <div className="relative">
        <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden relative">
          {latestNews?.map((items, i) => (
            <div key={i} onClick={() => setOpenedIndex(i)}>
              <NewsCard
                image={items.Image}
                category={items.Category}
                date={items.Date}
                title={items.Title}
                link={items.Link}
                imageClassName={items.ImageClassName}
              />
            </div>
          ))}
        </div>
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden lg:hidden">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
            }}
            className="pr-2"
          >
            <CarouselContent className="-ml-4">
              {latestNews?.map((items, i) => (
                <CarouselItem
                  key={i}
                  onClick={() => setOpenedIndex(i)}
                  className="basis-[90%] p-0 pr-4"
                >
                  <NewsCard
                    image={items.Image}
                    category={items.Category}
                    date={items.Date}
                    title={items.Title}
                    link={items.Link}
                    imageClassName={items.ImageClassName}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {openedIndex !== null && (
          <NewsModal
            latestNews={latestNews}
            openedIndex={openedIndex}
            handleClose={() => setOpenedIndex(null)}
          />
        )}
      </div>
    </section>
  );
};

export default NewsSection;

import React from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { Link } from "react-router-dom";

const BlogListSection: React.FC = () => {
    return (
        <>
            <ScrollIndicator className="xl:absolute z-0 right-[88px] bottom-[110px] mt-4" />
            <div className="py-[24px] xl:py-16 px-4 md:px-16 lg:px-24 mx-auto overflow-x-hidden">
                <div className="flex flex-col   gap-4 xl:gap-12 items-center">
                    <div className="flex items-center w-full gap-3  ">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img
                                src="/lovable-uploads/futran_icon.svg"
                                alt="What we do? icon"
                                className="w-[54px] h-[54px] object-contain"
                            />
                        </div>
                        <h2 className="text-[30px] leading-[150%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
                            What we do?
                        </h2>
                    </div>
                    <div className="w-full">
                        <div className="   ">
                            <div className="mx-auto">

                                <div className="mx-auto   grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    <article className="flex max-w-xl flex-col items-start gap-4 justify-between">
                                        <img src="https://futrangroup.com/tech/advanced-tech.jpg" className="w-full " alt="" />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime="2020-03-16" className="text-gray-400">Mar 16, 2020</time>
                                            <Link to="#" className="relative z-10 rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300 hover:bg-gray-800">Marketing</Link>
                                        </div>
                                        <div className="group relative ">
                                            <h3 className="  text-lg/6 font-semibold mb-3 group-hover:text-[#1C3562]">
                                                <Link to="#">
                                                    1Boost your conversion rate
                                                </Link>
                                            </h3>
                                            <p className="  line-clamp-3 text-sm/6 text-gray-400">11Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.1</p>
                                        </div>
                                        <div className="relative   ">
                                            <Link className="text-sm/6 font-semibold  text-[#1C3562] flex items-center gap-1" to="#">
                                                Read more
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="flex max-w-xl flex-col items-start justify-between">
                                        <img src="https://futrangroup.com/tech/advanced-tech.jpg" className="w-full mb-3" alt="" />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime="2020-03-10" className="text-gray-400">Mar 10, 2020</time>
                                            <Link to="#" className="relative z-10 rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300 hover:bg-gray-800">Sales</Link>
                                        </div>
                                        <div className="group relative grow">
                                            <h3 className="mt-3 text-lg/6 font-semibold  group-hover:text-[#1C3562]">
                                                <Link to="#">

                                                    How to use search engine optimization to drive sales
                                                </Link>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
                                        </div>
                                        <div className="relative   ">
                                            <Link className="text-sm/6 font-semibold  text-[#1C3562] flex items-center gap-1" to="#">
                                                Read more
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="flex max-w-xl flex-col items-start justify-between">
                                        <img src="https://futrangroup.com/tech/advanced-tech.jpg" className="w-full mb-3" alt="" />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime="2020-02-12" className="text-gray-400">Feb 12, 2020</time>
                                            <Link to="#" className="relative z-10 rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300 hover:bg-gray-800">Business</Link>
                                        </div>
                                        <div className="group relative grow">
                                            <h3 className="mt-3 text-lg/6 font-semibold  group-hover:text-[#1C3562]">
                                                <Link to="#">

                                                    Improve your customer experience
                                                </Link>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.</p>
                                        </div>
                                        <div className="relative   ">
                                            <Link className="text-sm/6 font-semibold  text-[#1C3562] flex items-center gap-1" to="#">
                                                Read more
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="flex max-w-xl flex-col items-start justify-between">
                                        <img src="https://futrangroup.com/tech/advanced-tech.jpg" className="w-full mb-3" alt="" />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime="2020-03-10" className="text-gray-400">Mar 10, 2020</time>
                                            <Link to="#" className="relative z-10 rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300 hover:bg-gray-800">Sales</Link>
                                        </div>
                                        <div className="group relative grow">
                                            <h3 className="mt-3 text-lg/6 font-semibold  group-hover:text-[#1C3562]">
                                                <Link to="#">

                                                    How to use search engine optimization to drive sales
                                                </Link>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
                                        </div>
                                        <div className="relative   ">
                                            <Link className="text-sm/6 font-semibold  text-[#1C3562] flex items-center gap-1" to="#">
                                                Read more
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="flex max-w-xl flex-col items-start justify-between">
                                        <img src="https://futrangroup.com/tech/advanced-tech.jpg" className="w-full mb-3" alt="" />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime="2020-02-12" className="text-gray-400">Feb 12, 2020</time>
                                            <Link to="#" className="relative z-10 rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300 hover:bg-gray-800">Business</Link>
                                        </div>
                                        <div className="group relative grow">
                                            <h3 className="mt-3 text-lg/6 font-semibold  group-hover:text-[#1C3562]">
                                                <Link to="#">

                                                    Improve your customer experience
                                                </Link>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.</p>
                                        </div>
                                        <div className="relative   ">
                                            <Link className="text-sm/6 font-semibold  text-[#1C3562] flex items-center gap-1" to="#">
                                                Read more
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogListSection;

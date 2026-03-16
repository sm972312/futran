import React, { useState, useEffect } from "react";
import { fetchBlogs } from "@/api/blogApi";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { Link } from "react-router-dom";
type BlogItem = {
  image: string;
  date: string;
  category: string;
  heading: string;
  content: string;
  link: string;
};
const BlogListSection: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [page, setPage] = useState(1);
    const blogsPerPage = 6;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    useEffect(() => {
        fetchBlogs().then(setBlogs);
    }, []);
    const paginatedBlogs = blogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);
    return (
        <>
            <ScrollIndicator className="xl:absolute z-0 right-[88px] bottom-[110px] mt-4" />
            <div className="py-[24px] xl:py-16 px-4 md:px-16 lg:px-24 mx-auto overflow-x-hidden">
                <div className="flex flex-col gap-4 xl:gap-12 items-center">
                    <div className="flex items-center w-full gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img
                                src="/lovable-uploads/futran_icon.svg"
                                alt="What we do? icon"
                                className="w-[54px] h-[54px] object-contain"
                            />
                        </div>
                        <h2 className="text-[30px] leading-[150%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
                            Blogs
                        </h2>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <div className="mx-auto">
                                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {paginatedBlogs.map((blog, idx) => (
                                        <article key={idx + (page-1)*blogsPerPage} className="flex max-w-xl flex-col items-start gap-4 justify-between">
                                            <img src={blog.image} className="w-full" alt="" />
                                            <div className="flex items-center gap-x-4 text-xs">
                                                <time dateTime={blog.date} className="text-gray-400">{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</time>
                                                <Link to="#" className="relative z-10 rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300 hover:bg-gray-800">{blog.category}</Link>
                                            </div>
                                            <div className="group relative">
                                                <h3 className="text-lg/6 font-semibold mb-1 group-hover:text-[#1C3562]">
                                                    <Link to={blog.link}>{blog.heading}</Link>
                                                </h3>
                                                <p className="line-clamp-3 text-sm/6 text-gray-400">{blog.content}</p>
                                            </div>
                                            <div className="relative">
                                                <Link className="text-sm/6 font-semibold text-[#1C3562] flex items-center gap-1" to={blog.link}>
                                                    Read more
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                {totalPages > 1 && (
                                  <div className="flex justify-center mt-8 gap-2">
                                    <button
                                      onClick={() => setPage(page - 1)}
                                      disabled={page === 1}
                                      className={`px-3 py-1 rounded border ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                                    >
                                      Prev
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                      <button
                                        key={i}
                                        onClick={() => setPage(i + 1)}
                                        className={`px-3 py-1 rounded border ${page === i + 1 ? 'bg-[#1C3562] text-white' : 'hover:bg-gray-200'}`}
                                      >
                                        {i + 1}
                                      </button>
                                    ))}
                                    <button
                                      onClick={() => setPage(page + 1)}
                                      disabled={page === totalPages}
                                      className={`px-3 py-1 rounded border ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                                    >
                                      Next
                                    </button>
                                  </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogListSection;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogData } from "@/api/blogApi";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import BlogInnerHero from "@/components/blog/BlogInnerHero";


const BlogInner: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogIndex = Number(id);
  const blog = blogData[blogIndex];

  if (!blog) {
    return <div className="p-8 text-center">Blog not found.</div>;
  }

  const hasPrev = blogIndex > 0;
  const hasNext = blogIndex < blogData.length - 1;
  return (
    <>
      <Helmet>
        <title>{blog.MetaTitle} | Futran Blog</title>
        <meta name="description" content={blog.MetaDescription.slice(0, 160)} />
        SchemaCode:`{blog.SchemaCode}`,
      </Helmet>
      <Navigation />
      <BlogInnerHero heading={blog.heading} category={blog.category} date={blog.date} />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <Link to="/blog" className="text-blue-600 underline mb-4 inline-block">← Back to Blogs</Link>
        <img src={blog.image} alt={blog.heading} className="w-full rounded mb-6" />
        <div className="flex items-center gap-4 text-xs mb-2">
          <span className="text-gray-400">{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span className="rounded-full bg-gray-800/60 px-2 py-1 font-medium text-gray-300">{blog.category}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{blog.heading}</h1>
        <div className="bloginnercontbox">
            <div dangerouslySetInnerHTML={{ __html: blog.Megacontent }} />
        </div>
        <div className="flex justify-between mt-8 pt-6 border-t-2">
          {hasPrev ? (
            <Link to={`/blog/${blogIndex - 1}`} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">← Previous Blog</Link>
          ) : <span />}
          {hasNext ? (
            <Link to={`/blog/${blogIndex + 1}`} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Next Blog →</Link>
          ) : <span />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogInner;

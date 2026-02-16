import React from "react";
import Header from "@/components/shared/Header";
import {
  BlogHero,
  BlogSlide2,
  BlogSlide3,
  BlogSlide4,
  BlogSlide5,
  BlogSlide6,
  BlogSlide7,
  BlogClosing,
} from "@/components/sections";

const Blog: React.FC = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="resources" />
      <BlogHero />
      <BlogSlide2 />
      <BlogSlide3 />
      <BlogSlide4 />
      <BlogSlide5 />
      <BlogSlide6 />
      <BlogSlide7 />
      <div className="-mt-[8%] relative z-10">
        <BlogClosing />
      </div>
    </main>
  );
};

export default Blog;

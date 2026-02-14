import React from "react";
import Header from "@/components/shared/Header";
import {
  PhotoVideoHero,
  PhotoVideoSlide2,
  PhotoVideoSlide3,
  PhotoVideoSlide4,
  PhotoVideoSlide5,
  PhotoVideoSlide6,
  PhotoVideoSlide7,
  PhotoVideoSlide8,
  PhotoVideoSlide9,
  PhotoVideoClosing,
  Footer,
} from "@/components/sections";

const PhotoVideo = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="photo-video" />
      <PhotoVideoHero />
      <PhotoVideoSlide2 />
      <PhotoVideoSlide3 />
      <PhotoVideoSlide4 />
      <PhotoVideoSlide5 />
      <PhotoVideoSlide6 />
      <PhotoVideoSlide7 />
      <PhotoVideoSlide8 />
      <div className="relative z-20 mt-20">
        <PhotoVideoSlide9 />
      </div>
      <div className="relative z-10 mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default PhotoVideo;

"use client";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/_hooks";
import { convertHttpToHttps } from "@/_helpers";
import Link from "next/link";
import { Button } from "@/_components/shared/button";
import Image from "next/image";
import {
  renderBannerPagination,
  available_modules,
  getSwiperModules,
} from "@/_components/banner-slider/swiper/functions";

export const Swiper = ({ swiper_data }) => {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    slidesPerView,
    modules,
    autoplay,
    spaceBetween,
    breakpoints,
    navigation,
    pagination,
    slides,
    num_of_slides,
    type,
    rewind,
  } = swiper_data;

  const handleNextSlide = () => {
    swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiper.slidePrev();
  };

  const handleSlideTo = (index) => {
    swiper.slideTo(index);
  };

  const { desktop, mobile } = slides;

  const is_mobile = useIsMobile();

  switch (type) {
    case "banner":
      return (
        <Slider
          rewind={rewind}
          autoplay={modules?.includes("Autoplay") ? autoplay : false}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={({ activeIndex }) => {
            setCurrentSlide(activeIndex);
          }}
          modules={[
            ...getSwiperModules({
              modules: modules,
              available_modules: available_modules,
            }),
          ]}
          navigation={modules?.includes("Navigation") ? navigation : false}
          pagination={modules?.includes("Pagination") ? pagination : false}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
        >
          {(is_mobile ? mobile : desktop)?.map(
            ({
              id,
              url,
              target,
              title,
              subtitle,
              text,
              button,
              image,
              file_data: {
                height,
                width,
                descriptions: { alt },
              },
            }) => (
              <SwiperSlide key={id} className="!w-full">
                <Link
                  target={`${target ?? "_self"}`}
                  href={`${url ?? "/stranica-u-izradi"}`}
                >
                  <div className="relative w-full">
                    <Image
                      src={convertHttpToHttps(image ?? "")}
                      alt={alt ?? "Bogutovo"}
                      width={width ?? 1920}
                      priority
                      className={`!w-full !h-auto`}
                      height={height ?? 1080}
                    />
                    <div className="absolute max-md:pl-[1rem] md:pl-[5.25rem] h-full flex flex-col my-auto justify-center z-[5] left-0 top-0">
                      {title && (
                        <h1 className="text-white text-[1.479rem] font-light leading-[100%]">
                          {title}
                        </h1>
                      )}
                      {subtitle && (
                        <h2 className="text-white mt-3 text-[2.9rem] font-semibold leading-[100%]">
                          {subtitle}
                        </h2>
                      )}
                      {text && (
                        <p className="text-white font-light text-base">
                          {text}
                        </p>
                      )}
                      {button && (
                        <Button className="mt-[2rem]">{button}</Button>
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ),
          )}
          {num_of_slides?.desktop > 1 &&
            renderBannerPagination({
              current_slide: currentSlide,
              num_of_slides: num_of_slides?.desktop,
              func: {
                next: handleNextSlide,
                prev: handlePrevSlide,
                slideTo: handleSlideTo,
              },
            })}
        </Slider>
      );
    default:
      return (
        <Slider
          rewind={rewind}
          autoplay={modules?.includes("Autoplay") ? autoplay : false}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={({ activeIndex }) => {
            setCurrentSlide(activeIndex);
          }}
          modules={[
            ...getSwiperModules({
              modules: modules,
              available_modules: available_modules,
            }),
          ]}
          navigation={modules?.includes("Navigation") ? navigation : false}
          pagination={modules?.includes("Pagination") ? pagination : false}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
        >
          {(is_mobile ? mobile : desktop)?.map(
            ({
              id,
              url,
              title,
              target,
              subtitle,
              text,
              button,
              image,
              file_data: {
                height,
                width,
                descriptions: { alt },
              },
            }) => (
              <SwiperSlide key={id} className="!w-full">
                <Link
                  target={`
                ${target ?? "_self"}
                `}
                  href={`${url ?? "/stranica-u-izradi"}`}
                >
                  <div className="relative w-full">
                    <Image
                      src={convertHttpToHttps(image ?? "")}
                      alt={alt ?? "Bogutovo"}
                      width={width ?? 1920}
                      height={height ?? 1080}
                    />
                    <div className="absolute max-sm:left-0 max-sm:w-fit max-sm:mx-auto sm:pr-[7.25rem] h-full flex flex-col my-auto justify-center z-[5] right-0 top-0">
                      {title && (
                        <h2 className="text-black text-[1.5rem] sm:text-[2.9rem] w-full max-w-[22.5rem] font-semibold leading-[100%]">
                          {title}
                        </h2>
                      )}
                      {subtitle && (
                        <h3 className="text-black mt-3 text-[1.479rem] font-semibold leading-[100%]">
                          {subtitle}
                        </h3>
                      )}
                      {text && (
                        <p className="text-black font-light text-base">
                          {text}
                        </p>
                      )}
                      {button && (
                        <Button className="mt-[2rem] max-sm:px-2 max-sm:py-2">
                          {button}
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ),
          )}
          {type === "banner" &&
            num_of_slides.desktop > 1 &&
            renderBannerPagination({
              current_slide: currentSlide,
              num_of_slides: num_of_slides.desktop,
              func: {
                next: handleNextSlide,
                prev: handlePrevSlide,
                slideTo: handleSlideTo,
              },
            })}
        </Slider>
      );
  }
};

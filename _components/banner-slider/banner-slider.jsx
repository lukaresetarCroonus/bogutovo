import { Swiper } from "@/_components/banner-slider/swiper";
import { Layout } from "@/_components/ui/layout";

export const BannerSlider = ({ banners, type = "banner" }) => {
  return (
    <Layout>
      <Swiper
        swiper_data={{
          slidesPerView: 1,
          spaceBetween: 0,
          rewind: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          pagination: {
            clickable: true,
          },
          modules: ["Autoplay"],
          slides: banners,
          num_of_slides: {
            desktop: banners?.desktop?.length,
            mobile: banners?.mobile?.length,
          },
          type: type,
        }}
      />
    </Layout>
  );
};

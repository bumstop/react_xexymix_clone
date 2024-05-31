import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const subSlideItems = [
  "bikershorts",
  "joggerpants",
  "newyoga",
  "tennislook",
  "windbreaker",
];

export function SubSlideContainer() {
  return (
    <div className="sub-slide-container">
      <Swiper
        breakpoints={{
          // 지정 브레이크포인트 px 이상일때 적용
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={0}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {subSlideItems.map((v, i) => (
          <SwiperSlide className="sub-slide-item" key={v}>
            <a href="#!">
              <img
                src={`${process.env.PUBLIC_URL}/images/sub_slide/sub_slide_${v}.jpg`}
                alt=""
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

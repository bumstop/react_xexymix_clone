import { Swiper, SwiperSlide } from "swiper/react";
import { SeasonSlideInfo, seasonSlideInfo } from "../data/season_slide_info";
import { makeItemBox } from "./item_box"; // props 로 import받은 Object의 value를 넘겨준다
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

export function SeasonSlideContainer() {

  return (
    <div className="season-slide-container">
      <div className="season-slide-title">
        <p>
          <b>실시간 급상승</b>, 많은 분들이 보고있어요.
        </p>
      </div>
      <Swiper
        breakpoints={{
          // 지정 브레이크포인트 px 이상일때 적용
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        scrollbar={{
          draggable: true,
          snapOnRelease: true,
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        className="season-slide-box">
        {seasonSlideInfo.map((v: SeasonSlideInfo, i: number) => (
          <SwiperSlide className="item-box" data-index={i} key={v.name}>
            {makeItemBox(v)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

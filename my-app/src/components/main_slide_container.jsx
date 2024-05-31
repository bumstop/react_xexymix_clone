import { MainSlideInfo, mainSlideInfo } from "../data/main_slide_info";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { filteredItemSame } from "../func/filter_func";

/** @param props.category mainSlideInfo 에서 category로 가져올 데이터 선별  */
// interface MainSlideContainerProps {
//   category: string | Array<string>;
// }
// export function MainSlideContainer(props: MainSlideContainerProps) {
export function MainSlideContainer(props) {
  // const [swiper, setSwiper] = useState<SwiperCore>();
  const [swiper, setSwiper] = useState();
  // const [isPlay, setIsPlay] = useState<boolean>(true);
  const [isPlay, setIsPlay] = useState(true);

  function isPlayToggle() {
    isPlay ? setIsPlay(false) : setIsPlay(true);

    if (swiper) {
      isPlay ? swiper.autoplay.stop() : swiper.autoplay.start();
    }
  }

  // 해당 함수가 어떤 타입의 배열을 받아들이는지에 대한 일반적인 구현을 갖고 있기 때문일 것입니다.
  // 예를 들어, 이 함수가 여러 종류의 배열을 처리하도록 일반적으로 구현되었다면, 
  // TypeScript에서는 해당 배열을 object[]로 처리할 수 있습니다. 
  // -> 자동으로 object[] 타입으로 분류했기 때문에 MainSlideInfo[] 타입을 할당할 수 없는 에러 발생

  // 하지만 여기서 중요한 것은 해당 함수의 반환 값이 실제로 MainSlideInfo[] 형식이라는 것입니다.
  // 따라서 setFilterData 함수를 호출할 때 반환 값의 타입을 명시적으로 지정하여 TypeScript에게 올바른 타입이라는 것을 알려주어야 합니다.
  // const filterData: MainSlideInfo[] = Array.isArray(props.category)
  //   ? mainSlideInfo
  //   : filteredItemSame(mainSlideInfo, "category", props.category) as MainSlideInfo[];
  const filterData = Array.isArray(props.category)
    ? mainSlideInfo
    : filteredItemSame(mainSlideInfo, "category", props.category);

  // const isEventItem = (v: MainSlideInfo): boolean => {
  const isEventItem = (v) => {
    // let bool: boolean;
    let bool;
    v.imgSrc === "/images/main_slide/banner_0.jpg"
      ? (bool = true)
      : (bool = false);
    return bool;
  };

  // const swiperSettings = {
  //   onSwiper: setSwiper,
  //   slidesPerView: "auto",
  //   centeredSlides: true,
  //   initialSlide: 0,
  //   spaceBetween: 0,
  //   pagination: {
  //     type: "fraction",
  //   },
  //   loop: true,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   navigation: true,
  //   modules: [Autoplay, Pagination, Navigation],
  // };

  // 메인페이지 스와이퍼 initialSlide가 인식되지 않는 문제 발생
  // 다른 페이지는 정상인데 이벤트 아이템이 들어간 스와이퍼에서
  // centeredSlides를 설정하니 이벤트 아이템이 initialSlide에서 제외당함.
  // 아래 useEffect를 사용해 해결함 (이벤트아이템이 있는 슬라이드면 1번 슬라이드로 이동)
  useEffect(() => {
    if (swiper && filterData === mainSlideInfo) {
        swiper.slideTo(2, 0);
        // slideTo(index, duration) (1번 슬라이드의 index는 2)
    }
  }, [swiper]); // swiper 의존성 배열 없으면 정상동작 안함 

  return (
    <div className="main-slide-container">
      <Swiper
        // onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}
        onSwiper={(swiper) => setSwiper(swiper)}
        slidesPerView={"auto"}
        centeredSlides={true}
        initialSlide={0}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // {...swiperSettings}
        className="main-slide-container"
      >
        {/* 
          Q: v 타입지정 뭘로 해야할까?
          A: MainSlideInfo

          WHY? 
          filterData의 타입을 MainSlideInfo[] 로 지정했기 때문에 
          그 인자인 v의 타입은 MainSlideInfo가 된다.
        */}
        {/* {filterData.map((v: MainSlideInfo) => ( */}
        {filterData.map((v) => (
          <SwiperSlide
            className={
              "main-slide-item" + (isEventItem(v) ? " event-item" : "")
            }
            key={v.imgSrc}
          >
            <img src={process.env.PUBLIC_URL + v.imgSrc} alt="이미지" />
            <div className="main-slide-item-txt-box">
              <div className="main-slide-item-category">{v.category}</div>
              <div className="main-slide-item-title">
                {/* {v.title.map((v: any, i: number, a: Array<string>) => ( */}
                {v.title.map((v, i, a) => (
                  <span key={i}>
                    {v}
                    {a.length === 1 ? "" : !i ? <br /> : ""}
                  </span>
                ))}
              </div>
              <div className="main-slide-item-desc">{v.desc}</div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className={"main-slide-btn" + (isPlay ? "" : " on")}
          onClick={isPlayToggle}
        ></div>
      </Swiper>
    </div>
  );
}

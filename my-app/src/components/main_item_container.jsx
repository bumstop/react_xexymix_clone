// Import react
import { useEffect } from "react";
// Import react-router
import { Link } from "react-router-dom";
// Import item info
import { itemInfo } from "../data/item_info";

// Import components
import { makeItemBox } from "./item_box";

// Import function
import {
  filteredItem,
  filteredItemOne,
  filteredItemSame,
} from "../func/filter_func";
import { SeasonSlideInfo } from "../data/season_slide_info";

// export function MainItemContainer(): JSX.Element {
export function MainItemContainer() {
  useEffect(() => {
    const observeTargets = document.querySelectorAll(".item-box-wrap");
    const eventTargets = document.querySelectorAll(".main-item-title");

    /** 화면에 targets요소가 보이면 seeing 요소 class 'on' toggle */
    // const observeIntersection = (
    //   observeTargets: NodeListOf<Element>,
    //   eventTargets: NodeListOf<Element>
    // ): void => {
    const observeIntersection = (observeTargets, eventTargets) => {
      const targetsArr = Array.from(observeTargets);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((v) => {
          const seeing = targetsArr.indexOf(v.target);
          const beforeSeeing =
            targetsArr.indexOf(v.target) - 1 >= 0
              ? targetsArr.indexOf(v.target) - 1
              : seeing;

          if (v.isIntersecting) {
            eventTargets.forEach((v) => v.classList.remove("on"));
            eventTargets[seeing].classList.add("on");
          }
          if (v.boundingClientRect.top > 0 && !v.isIntersecting) {
            console.log("안보인다", v);

            eventTargets.forEach((v) => v.classList.remove("on"));
            eventTargets[beforeSeeing].classList.add("on");
          }
        });
      });
      observeTargets.forEach((v) => observer.observe(v));
    };

    observeIntersection(observeTargets, eventTargets);
  }, []);

  return (
    <div className="main-item-container">
      <div className="seeing-box">
        <div className="main-item-title outer-title">
          <Link to={"/woman"}>
            <img
              src={`${process.env.PUBLIC_URL}/images/woman/mainitem_woman_outer_title.jpg`}
              alt="아우터"
            />
            <div className="tit">아우터</div>
            <div className="more">더보기</div>
          </Link>
        </div>
        <div className="main-item-title man-title">
          <Link to={"/man"}>
            <img
              src={`${process.env.PUBLIC_URL}/images/man/mainitem_man_title.jpg`}
              alt="맨즈"
            />
            <div className="tit">맨즈</div>
            <div className="more">더보기</div>
          </Link>
        </div>
        <div className="main-item-title top-title">
          <Link to={"/woman"}>
            <img
              src={`${process.env.PUBLIC_URL}/images/woman/mainitem_woman_top_title.jpg`}
              alt="상의"
            />
            <div className="tit">상의</div>
            <div className="more">더보기</div>
          </Link>
        </div>
        <div className="main-item-title bottom-title">
          <Link to={"/woman"}>
            <img
              src={`${process.env.PUBLIC_URL}/images/woman/mainitem_woman_bottom_title.jpg`}
              alt="하의"
            />
            <div className="tit">하의</div>
            <div className="more">더보기</div>
          </Link>
        </div>
      </div>
      <div className="main-item-box">
        {/* 여성 아우터 (12개 까지만 노출) */}
        <h2 className="main-item-title-mobile">아우터</h2>
        <div className="item-box-wrap outer-item-box-wrap">
          {/* {(filteredItem(itemInfo, "type", "outer") as SeasonSlideInfo[]) */}
          {filteredItem(itemInfo, "type", "outer")
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
        {/* 남성 (12개 까지만 노출)*/}
        <h2 className="main-item-title-mobile">맨즈</h2>
        <div className="item-box-wrap man-item-box-wrap">
          {/* {(filteredItemSame(itemInfo, "category", "MENS") as SeasonSlideInfo[]) */}
          {filteredItemSame(itemInfo, "category", "MENS")
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
        {/* 여성 상의 (12개 까지만 노출)*/}
        <h2 className="main-item-title-mobile">상의</h2>
        <div className="item-box-wrap woman-top-item-box-wrap">
          {filteredItemOne(
            filteredItemSame(itemInfo, "category", "WOMENS"),
            "type",
            "top"
            // ) as SeasonSlideInfo[]
          )
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
        {/* 여성 하의 (12개 까지만 노출)*/}{" "}
        <h2 className="main-item-title-mobile">하의</h2>
        <div className="item-box-wrap woman-bottom-item-box-wrap">
          {filteredItem(
            filteredItemSame(itemInfo, "category", "WOMENS"),
            "type",
            "bottom"
            // ) as SeasonSlideInfo[]
          )
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

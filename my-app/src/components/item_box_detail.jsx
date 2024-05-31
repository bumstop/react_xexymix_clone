import { SeasonSlideInfo } from "../data/season_slide_info";

/** 박스 아이콘 출력 */
// const itemIcon = (v: SeasonSlideInfo) =>
const itemIcon = (v) =>
  v.iconContent &&
  // v.iconContent.map((v: string) => (
  v.iconContent.map((v) => (
    <span className={"item-icon" + (v === "주문폭주" ? " hot" : "")} key={v}>
      {v}
    </span>
  ));

/** 상품설명 출력 */
// const descText = (v: SeasonSlideInfo) =>
const descText = (v) =>
  v.descSub && v.descMain ? (
    <>
      <div className="mb-5">{v.descMain}</div>
      <div>{v.descSub}</div>
    </>
  ) : (
    <>
      {v.descMain && <div>{v.descMain}</div>}
      {v.descSub && <div>{v.descSub}</div>}
    </>
  );

export { itemIcon, descText };

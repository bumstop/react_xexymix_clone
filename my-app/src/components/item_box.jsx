import { Link } from "react-router-dom";
import { itemIcon, descText } from "./item_box_detail";
import { SeasonSlideInfo } from "../data/season_slide_info";

/** 가격/할인/콤마 출력 */
// export const priceFormat = (v: SeasonSlideInfo): JSX.Element => {
export const priceFormat = (v) => {
  // const strikeStyle: { [k: string]: string } = {
  const strikeStyle = {
    textDecoration: "line-through",
    marginLeft: "5px",
    fontSize: "12px",
    color: "#979797",
  };

  return v.sale ? (
    <>
      <span>{Number(v.sale).toLocaleString()}</span>
      <span style={strikeStyle}>{Number(v.price).toLocaleString()}</span>
    </>
  ) : (
    <span>{Number(v.price).toLocaleString()}</span>
  );
};

/** info: v : 불러올 info.js 데이터 파일의 values 배열객체 */
// export function makeItemBox(v: SeasonSlideInfo) {
export function makeItemBox(v) {
  return (
    <Link to={`/product/${v.id}`}>
      <div className="item-img-box">
        <img src={process.env.PUBLIC_URL + v.imgSrc} alt={v.name} />
      </div>
      <div className="item-txt-box">
        <div className="item-name-box">{v.name}</div>
        <div className="item-price-box">{priceFormat(v)}</div>
        <div className="item-icon-box">{itemIcon(v)}</div>
        <div className="item-desc-box">{descText(v)}</div>
      </div>
    </Link>
  );
}

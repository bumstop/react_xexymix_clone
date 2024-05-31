import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { itemInfo, ItemInfo } from "../data/item_info";
import { seasonSlideInfo } from "../data/season_slide_info";
import { descText, itemIcon } from "../components/item_box_detail";
import { ProductOrderedList } from "../components/product_ordered_list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { priceFormat } from "../components/item_box";

export function Product() {
  console.log("Product 컴포넌트 랜더링됨");

  const params = useParams();
  // const product: ItemInfo = [...itemInfo, ...seasonSlideInfo].filter(
  const product = [...itemInfo, ...seasonSlideInfo].filter(
    (v) => v.id === params.productId
  )[0];
  const price = product.sale ? Number(product.sale) : Number(product.price);

  // let countObjectInitialValue: Record<string, number> = {};
  let countObjectInitialValue = {};
  product.option.forEach((v, i) => (countObjectInitialValue[v.toString()] = 0));

  // product.option.forEach((v, i) => (countObjectInitialValue[i] = [v, 0]));
  // countObjectInitialValue = Object.fromEntries(countObjectInitialValue);

  console.log(countObjectInitialValue);

  const [countObject, setCountObject] = useState(countObjectInitialValue);

  // const changeCountObject = (key: string, value: number): void => {
  const changeCountObject = (key, value) => {
    setCountObject((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const totalPrice =
    Object.values(countObject).reduce((acc, cur) => acc + cur, 0) * price;

  const selectProductOptionRef = useRef();
  const [productOrderedListArr, setProductOrderedListArr] = useState([]); // 타입 지정 필요 여기부터 시작

  /** 가격/할인/콤마 출력 함수 */
  // const priceFormat = product.sale ? (
  //   <>
  //     <strike>{Number(product.price).toLocaleString()}원</strike>
  //     <span>{Number(product.sale).toLocaleString()}원</span>
  //   </>
  // ) : (
  //   <span>{Number(product.price).toLocaleString()}원</span>
  // ); // const priceFormat -> item_box.tsx 에서 import 해온뒤 재사용하는 것으로 변경함.

  /** 상품 옵션 선택 출력 함수 */
  const makeProductOption = (
    <>
      <option value={0} key={0}>
        옵션 선택
      </option>
      {product.option.map((v, i) => (
        <option value={i + 1} key={i + 1}>
          {v}
        </option>
      ))}
    </>
  ); // const makeProductOption

  /**
   * 1. ProductOrderedListArr에 선택한 옵션을 추가함
   * 2. selectProductOptionRef를 "옵션 선택" 으로 초기화함
   */
  const addProductOrderedList = () => {
    const selectRefText =
      selectProductOptionRef.current?.options[
        selectProductOptionRef.current?.selectedIndex
      ].text;

    const isAlreadySelected =
      productOrderedListArr.find((v) => v.selectRefText === selectRefText) !==
      undefined;

    // 1. ProductOrderedListArr에 선택한 옵션을 추가함
    if (isAlreadySelected) {
      window.alert("이미 추가된 상품입니다.");
    } else {
      changeCountObject(selectRefText, 1);

      setProductOrderedListArr([
        ...productOrderedListArr,
        {
          selectRefText: selectRefText,
          price: price,
        },
      ]);
    }

    // 2. selectProductOptionRef를 "옵션 선택" 으로 초기화함
    selectProductOptionRef.current.options[0].selected = true;
  };

  // 삭제버튼 클릭시 해당 리스트를 삭제하는 함수 -> 자식컴포넌트에 props로 넘겨준 후 사용
  const removeProductOrderedList = (selectRefText) => {
    setProductOrderedListArr(
      productOrderedListArr.filter((v) => v.selectRefText !== selectRefText)
    );
    changeCountObject(selectRefText, 0);
  };

  // useEffect(() => {
  //   console.log(countObject, productOrderedListArr);
  // }, [countObject]);

  return (
    <div className="product-container">
      <div className="product-top">
        <div
          className="thumbnail-box"
          style={{
            background: `url(${
              process.env.PUBLIC_URL + product.imgSrc
            }) center/cover no-repeat`,
          }}
        >
          <img src={process.env.PUBLIC_URL + product.imgSrc} alt="thumbnail" />
        </div>
        <div className="product-box">
          <div className="product-tit-box">
            <div className="product-name">{product.name}</div>
            <div className="product-icon">{itemIcon(product)}</div>
            <div className="product-desc">{descText(product)}</div>
          </div>
          <div className="product-order-box">
            <div className="product-order-list product-price">
              <span>판매가</span>
              <span className="price-right">{priceFormat(product)}</span>
            </div>
            <div className="product-order-list product-point">
              <span>포인트 적립</span>
              <span className="point-right">1% ~ 최대 5%</span>
            </div>
            <div className="product-order-list product-option">
              <span>사이즈 , 색상</span>
              <select
                ref={selectProductOptionRef}
                name="product-option"
                id="select-product-option"
                onChange={addProductOrderedList}
              >
                {makeProductOption}
              </select>
            </div>
            <div className="fit-size-btn">
              <span>고객님의 사이즈를 찾아보세요!</span>
            </div>
          </div>
          <div className="product-ordered-box">
            {/* 상품 옵션 선택시 박스 추가 */}
            {productOrderedListArr.map((v, i) => (
              <ProductOrderedList
                selectRefText={v.selectRefText}
                key={v.selectRefText}
                price={v.price}
                changeCountObject={changeCountObject}
                removeProductOrderedList={removeProductOrderedList}
              />
            ))}
          </div>
          <div className="total-price-box">
            <span>총 합계</span>
            <span>
              {totalPrice.toLocaleString()}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  paddingLeft: "5px",
                }}
              >
                원
              </span>
            </span>
          </div>
          <div className="product-btns">
            <div className="buy-btn">구매하기</div>
            <div className="wish-btn">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <div className="detail-box"></div>
        <div className="size-recommended-box"></div>
        <div className="review-box"></div>
      </div>
    </div>
  );
}

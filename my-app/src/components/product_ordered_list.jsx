import { useRef } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";

// interface ProductOrderedListProps {
//   selectRefText: string,
//   key: string,
//   price: number,
//   changeCountObject: () => void,
//   removeProductOrderedList: () => void,
// }

/** 상품 수량 및 가격 표시 박스 컴포넌트 */
// export const ProductOrderedList = (props: ProductOrderedListProps): JSX.Element => {
export const ProductOrderedList = (props) => {
  console.log("ProductOrderedList 랜더링됨");

  const countInputRef = useRef();
  const changeCountObject = (key, value) => props.changeCountObject(key, value);
  const price = (countInputRef.current?.value || 1) * props.price;

  useDidMountEffect(() => {
    const count = countInputRef.current.value;
    const isWrongCount =
      count <= 0 || isNaN(count) || Number.isInteger(Number(count)) === false;

    if (isWrongCount) {
      changeCountObject(props.selectRefText, (countInputRef.current.value = 1));
      window.alert("올바른 주문수량을 입력해주세요.");
    }
  });

  return (
    <div className="product-ordered-list">
      <span className="option-name">{props.selectRefText}</span>
      <div className="option-counter">
        <div
          className="minus-btn"
          onClick={() =>
            changeCountObject(
              props.selectRefText,
              --countInputRef.current.value
            )
          }
        ></div>
        <div className="count-box">
          <input
            ref={countInputRef}
            className="count-input"
            type="text"
            defaultValue={1}
            onChange={() =>
              changeCountObject(
                props.selectRefText,
                Number(countInputRef.current.value)
              )
            }
          />
        </div>
        <div
          className="plus-btn"
          onClick={() =>
            changeCountObject(
              props.selectRefText,
              ++countInputRef.current.value
            )
          }
        ></div>
      </div>
      <span className="option-price">{price.toLocaleString()}원</span>
      <div
        className="product-close-btn"
        onClick={() => props.removeProductOrderedList(props.selectRefText)}
      ></div>
    </div>
  );
}; // const ProductOrderedList

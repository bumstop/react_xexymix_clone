
import { useEffect, useRef, useState } from "react";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "./item_box";
import { filteredItem, filteredItemSame } from "../func/filter_func";
import { itemInfo } from "../data/item_info";

export function CategoryItemContainer(props) {

  const chgItemCategory = (target) => {
    props.setItemCategory(target.innerText);
  };
  const chgFilterState = (type) => {
    props.setFilterState(type);
  };

  // 아이템 카테고리 데이터
  // interface DefCategory {
  //   txt: string;
  //   type: string;
  // }
  // interface CategoryData extends DefCategory {
  //   link?: string;
  // }

  // const defCategory: DefCategory[] = [
  const defCategory = [
    { txt: "우먼즈", type: "WOMENS" },
    { txt: "맨즈", type: "MENS" },
  ];

  // const categoryData: any =
  const categoryData =
    props.filterType === "type"
      ? gnbMenu.gnbCategory.filter((v) => v.txt === props.condition)[0].sub
      : defCategory;

  // 필터기준에 따라 들어갈 데이터 변경
  const categoryListArr = [{ txt: "전체", type: "all" }, ...categoryData];

  useEffect(() => {
    categoryListArr.forEach(
      (v) => props.itemCategory === v.txt && chgFilterState(v.type)
    );
  }, [props.itemCategory]);

  // 아이템 카테고리 생성
  const makeCategoryItem = () => {
    // let filterData: any;
    let filterData;

    // const categoryItem = (data: any) =>
    //   data.map((v: any, i: any) => (
    const categoryItem = (data) =>
      data.map((v, i) => (
        <div className="item-box" key={i}>
          {makeItemBox(v)}
        </div>
      ));
    // 맨즈, 우먼즈 페이지 아이템 필터링 조건
    if (props.filterType === "type" && props.filterState === "all") {
      filterData = filteredItemSame(itemInfo, "category", props.category);
      return categoryItem(filterData);
    }
    if (props.filterType === "type" && props.filterState !== "all") {
      const info = filteredItemSame(itemInfo, "category", props.category);
      filterData = filteredItem(info, props.filterType, props.filterState);
      return categoryItem(filterData);
    }
    // 신상할인, 베스트 페이지 아이템 필터링 조건
    if (props.filterType === "iconContent" && props.filterState === "all") {
      filterData = filteredItem(itemInfo, props.filterType, props.condition);
      return categoryItem(filterData);
    }
    if (props.filterType === "iconContent" && props.filterState !== "all") {
      const info = filteredItemSame(itemInfo, "category", props.filterState);
      filterData = filteredItem(info, props.filterType, props.condition);
      return categoryItem(filterData);
    }
  };

  // const [isDrag, setIsDrag] = useState<boolean>(false);
  // const [dragPosition, setDragPosition] = useState<number>(0);
  // const FirstPositionRef = useRef<number>(0);
  // const maxPosX = useRef<number>(0);
  const [isDrag, setIsDrag] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const FirstPositionRef = useRef(0);
  const maxPosX = useRef(0);

  useEffect(() => {
    // const dragBox = document.querySelector<HTMLDivElement>(".drag-box");
    const dragBox = document.querySelector(".drag-box");
    // const categoryList =
    //   document.querySelector<HTMLDivElement>(".category-list");
    const categoryList =
      document.querySelector(".category-list");

    if (dragBox && categoryList) {
      maxPosX.current = dragBox.clientWidth - categoryList.clientWidth;

      if (maxPosX.current < 0) {
        categoryList.setAttribute("class", "category-list max");
      }
    }
  }, []);

  // const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>): void => {
  const dragStart = (e) => {
    // 부모박스가 자식박스보다 작을때만 드래그 허용
    if (maxPosX.current > 0) {
      setIsDrag(true);
    }
    // const screenX =  e.screenX || (e.touches && e.touches[0].screenX);
    const screenX = 'screenX' in e ? e.screenX : e.touches[0].screenX;
    FirstPositionRef.current = screenX - dragPosition;
  };
  // 두번째 드래그부터 deltaX가 0보다 커져 드래그가 초기화 되는 현상 발생.
  // -dragPosition 을 추가해서 보정해줌 -> 문제해결.

  // const dragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>): void => {
  const dragging = (e) => {
  // const dragging = (e: React.MouseEvent | React.TouchEvent) => {
    // const inRange = (num: number, min: number, max: number): number => {
    const inRange = (num, min, max) => {
      if (num < min) return min;
      if (num > max) return max;
      return num;
    };
    // const dragPosX = e.clientX || e.touches[0].screenX; 에서 밑줄로 바꿈
    const dragPosX = 'screenX' in e ? e.screenX : e.touches[0].screenX;
    const deltaX = dragPosX - FirstPositionRef.current;

    setDragPosition(inRange(deltaX, -maxPosX.current, 0));

    e.currentTarget.style.transform = `translateX(${dragPosition}px)`; // 'EventTarget & Element' 형식에 'style' 속성이 없습니다.

    console.log(dragPosition);
  };

  const dragEnd = () => {
    setIsDrag(false);
  };

  return (
    <div className="category-item-container">
      <h2 className="category-title">{props.category}</h2>
      <div
        className={
          "category-list" +
          (dragPosition < 0 ? " active" : "") +
          (dragPosition === -maxPosX.current ? " max" : "")
        }
      >
        <div
          className="drag-box"
          onMouseDown={dragStart}
          onMouseMove={(e) => isDrag && dragging(e)}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={dragStart}
          onTouchMove={(e) => isDrag && dragging(e)}
          onTouchEnd={dragEnd}
        >
          {categoryListArr.map((v) => (
            <div
              key={v.txt}
              className={props.itemCategory === v.txt ? "on" : ""}
              onClick={(e) => chgItemCategory(e.target)}
            >
              {v.txt}
            </div>
          ))}
        </div>
      </div>
      <div className="category-item item-box-wrap">{makeCategoryItem()}</div>
    </div>
  );
}

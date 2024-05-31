import { useLocation } from "react-router-dom";
import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";
import { useEffect, useState } from "react";

export function Woman() {
  const location = useLocation();
  const keyword = location.state?.keyword || "전체";
  const [itemCategory, setItemCategory] = useState(keyword);
  const [filterState, setFilterState] = useState("all");

  // keyword가 변경됐을때만 실행
  useEffect(() => {
    setItemCategory(keyword);
  }, [location, keyword]);
  // keyword로만 감시하면 gnb메뉴로 들어올시 가끔씩 안바뀌는 문제 있음. 
  // -> location을 감시변수에 추가하니 해결됨.

  return (
    <>
      <MainSlideContainer category="WOMENS" />
      <CategoryItemContainer
        condition="우먼즈"
        category="WOMENS"
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        filterState={filterState}
        setFilterState={setFilterState}
        filterType="type"
      />
    </>
  );
}

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";

export function Man() {
  const location = useLocation();
   const keyword = location.state?.keyword || "전체";
  const [itemCategory, setItemCategory] = useState(keyword);
  const [filterState, setFilterState] = useState("all");

  // keyword가 변경됐을때만 실행
  useEffect(() => {
    setItemCategory(keyword);
  }, [location, keyword]);

  return (
    <>
      <MainSlideContainer category="MENS" />
      <CategoryItemContainer
        condition="맨즈"
        category="MENS"
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        filterState={filterState}
        setFilterState={setFilterState}
        filterType="type"
      />
    </>
  );
}

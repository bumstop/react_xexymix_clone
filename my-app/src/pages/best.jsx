import { useLocation } from "react-router-dom";
import { CategoryItemContainer } from "../components/category_item_container";
import { MainBannerContainer } from "../components/main_banner_container";
import { useEffect, useState } from "react";

export function Best() {
  const location = useLocation();
  const keyword = location.state?.keyword || "전체";
  const [itemCategory, setItemCategory] = useState();
  const [filterState, setFilterState] = useState("all");

  // keyword가 변경됐을때만 실행
  useEffect(() => {
    setItemCategory(keyword);
  }, [location, keyword]);
  
  return (
    <>
      <MainBannerContainer page="best" />
      <CategoryItemContainer
        condition="주문폭주"
        category="BEST"
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        filterState={filterState}
        setFilterState={setFilterState}
        filterType="iconContent"
      />
    </>
  );
}

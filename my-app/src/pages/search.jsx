import { useLocation, useNavigate } from "react-router-dom";
import { itemInfo } from "../data/item_info";
import { filteredItem } from "../func/filter_func";
import { makeItemBox } from "../components/item_box";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Search() {
  const location = useLocation();
  const keyword = location.state?.keyword || "";
  const [searchkeyword, setSearchkeyword] = useState(keyword);
  const searchItems = filteredItem(itemInfo, "name", searchkeyword);
  const searchCount = searchItems.length;
  const sortTxtRef = useRef();
  const ItemBoxWrapRef = useRef();
  const searchRef = useRef();
  const navigate = useNavigate();
  const [sortBoxOn, setSortBoxOn] = useState(false);
  const [sortType, setSortType] = useState("상품 정렬");
  // 오름차순 (작은거먼저)
  const sortedLowFirst = searchItems.slice().sort((a, b) => {
    const aPrice = a.sale ? a.sale : a.price;
    const bPrice = b.sale ? b.sale : b.price;

    return aPrice - bPrice;
  });

  // 내림차순 (큰거먼저)
  const sortedHighFirst = searchItems.slice().sort((a, b) => {
    const aPrice = a.sale ? a.sale : a.price;
    const bPrice = b.sale ? b.sale : b.price;

    return bPrice - aPrice;
  });

  const makeItemBoxWrap = (item) =>
    item.map((v) => (
      <div className="item-box" key={v.name}>
        {makeItemBox(v)}
      </div>
    ));

  // 검색어를 가지고 search 페이지로 이동
  // navigate의 두번째 인자중 하나인 state로 searchValue를 전달
  const goSearch = (searchValue) => {
    console.log("검색 입력값:", searchValue);
    navigate("/search", { state: { keyword: searchValue } });
  };


  useEffect(() => {
    setSearchkeyword(keyword);
    setSortType("상품 정렬");
  }, [keyword]);

  return (
    <>
      <div className="search-head-container">
        <div className="search-head">
          <div className="search-txt">
            <span style={{ fontWeight: 500, fontSize: "30px" }}>
              &quot;{searchkeyword}&quot;
            </span>
            에 대한 {searchCount}
            개의 통합 검색결과입니다.
          </div>
          <div className="search-box-wrap">
            <input
              ref={searchRef}
              className="search-box"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") goSearch(searchRef.current.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => goSearch(searchRef.current.value)}></button>
          </div>
        </div>
      </div>
      <div className="search-item-container">
        <div className="item-info">
          <div className="item-count">
            총 <span style={{ fontWeight: 600 }}>{searchCount}</span>개의 상품이 있습니다.
          </div>
          <div  
            className={"sort-box" + (sortBoxOn ? " on" : "")}
            onClick={() => setSortBoxOn(!sortBoxOn)}>
            <div className="sort-select">
              <span ref={sortTxtRef}>{sortType}</span>
              <FontAwesomeIcon icon={faChevronDown} className="sort-appearance" />
            </div>
            <ul className="sort-option">
              <li onClick={() =>setSortType("높은 가격순")}>높은 가격순</li>
              <li onClick={() =>setSortType("낮은 가격순")}>낮은 가격순</li>
            </ul>
          </div>
        </div>
        <div ref={ItemBoxWrapRef} className="item-box-wrap">
          {sortType === "상품 정렬" && makeItemBoxWrap(searchItems)}
          {sortType === "높은 가격순" && makeItemBoxWrap(sortedHighFirst)}
          {sortType === "낮은 가격순" && makeItemBoxWrap(sortedLowFirst)}
        </div>
      </div>
    </>
  );
}

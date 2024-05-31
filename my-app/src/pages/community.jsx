import { Link } from "react-router-dom";
import { gnbMenu } from "../data/gnb";
import { faqList } from "../data/faq_list";
import { noticeList } from "../data/notice_list";
import { Fragment, useRef, useState } from "react";

export function Community() {
  const [categoryNow, setCategoryNow] = useState("전체보기");
  const faqSearchRef = useRef();
  const faqListAll = faqList["주문/결제"].concat(
    faqList["배송"],
    faqList["교환/반품"]
  );

  const toggleShowFaqAnswer = (e) => {
    const nextEle = e.currentTarget.nextElementSibling;
    nextEle.classList.toggle("on");
  };
  const CommuSub = gnbMenu.gnbCategory.filter((v) => v.txt === "커뮤니티")[0]
    .sub;

  const makeCommuCate = CommuSub.map((v) => (
    <li key={v.txt}>
      <Link to={v.link}>{v.txt}</Link>
    </li>
  ));

  // 자주찾는질문 리스트 생성 변수
  const makeFaqList1 = faqList["주문/결제"].map((v) => (
    <Fragment key={v.q}>
      <li onClick={toggleShowFaqAnswer}>
        <div className="faq-list-category">주문/결제</div>
        <div className="faq-list-question">{v.q}</div>
      </li>
      <li className="faq-list-answer">
        <div>
          {v.a.split("^").map((v) => (
            <p key={v}>
              {v}
              <br />
              <br />
            </p>
          ))}
        </div>
      </li>
    </Fragment>
  ));

  const makeFaqList2 = faqList["배송"].map((v) => (
    <Fragment key={v.q}>
      <li onClick={toggleShowFaqAnswer}>
        <div className="faq-list-category">배송</div>
        <div className="faq-list-question">{v.q}</div>
      </li>
      <li className="faq-list-answer">
        <div>
          {v.a.split("^").map((v) => (
            <p key={v}>
              {v}
              <br />
              <br />
            </p>
          ))}
        </div>
      </li>
    </Fragment>
  ));

  const makeFaqList3 = faqList["교환/반품"].map((v) => (
    <Fragment key={v.q}>
      <li onClick={toggleShowFaqAnswer}>
        <div className="faq-list-category">교환/반품</div>
        <div className="faq-list-question">{v.q}</div>
      </li>
      <li className="faq-list-answer">
        <div>
          {v.a.split("^").map((v) => (
            <p key={v}>
              {v}
              <br />
              <br />
            </p>
          ))}
        </div>
      </li>
    </Fragment>
  ));

  // 검색기능
  const [filteredResults, setFilteredResults] = useState([]);
  const searchFaq = (searchValue) => {
    const filteredData = faqListAll.filter((item) => {
      return Object.values(item).join("").includes(searchValue);
    });
    console.log(searchValue, filteredData);
    setFilteredResults(filteredData);
  };

  const makeFaqList4 = filteredResults.map((v) => (
    <Fragment key={v.q}>
      <li onClick={toggleShowFaqAnswer}>
        <div className="faq-list-category">{v.cat}</div>
        <div className="faq-list-question">{v.q}</div>
      </li>
      <li className="faq-list-answer">
        <div>
          {v.a.split("^").map((v) => (
            <p key={v}>
              {v}
              <br />
              <br />
            </p>
          ))}
        </div>
      </li>
    </Fragment>
  ));

  let makeFaqList;

  switch (categoryNow) {
    case "전체보기":
      makeFaqList = [...makeFaqList1, ...makeFaqList2, ...makeFaqList3];
      break;
    case "주문/결제":
      makeFaqList = makeFaqList1;
      break;
    case "배송":
      makeFaqList = makeFaqList2;
      break;
    case "교환/반품":
      makeFaqList = makeFaqList3;
      break;
    case "검색":
      makeFaqList = makeFaqList4;
      break;
    default:
    //do nothing
  }

  // 공지사항 리스트 생성 변수
  const makeNoticeList = noticeList.map((v) => (
    <Link to={v.link} className="notice-list-item" key={v.txt}>
      <span>{v.txt}</span>
    </Link>
  ));

  return (
    <>
      <h2 className="commu-title">커뮤니티</h2>
      <ul className="commu-category">{makeCommuCate}</ul>
      <div className="commu-top">
        <div className="faq-search-box">
          <fieldset>
            <label htmlFor="faq-search">
              FAQ
              <br />
              SEARCH
            </label>
            <select>
              <option defaultValue="1">전체검색</option>
              <option defaultValue="2">주문/결제</option>
              <option defaultValue="3">배송</option>
              <option defaultValue="4">교환/반품</option>
            </select>
            <input
              ref={faqSearchRef}
              id="faq-search"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchFaq(faqSearchRef.current.value);
                  setCategoryNow("검색");
                }
              }}
            ></input>
            <button
              onClick={() => {
                searchFaq(faqSearchRef.current.value);
                setCategoryNow("검색");
              }}
            ></button>
          </fieldset>
        </div>
        <div className="cs-info">
          <p>고객센터 운영안내</p>
          <p>1661-2811</p>
          <p>
            평일 10:00 ~ 17:00 / 점심 12:30 ~ 14:00
            <br />
            토/일요일 및 공휴일 휴무
          </p>
        </div>
      </div>
      <div className="commu-bottom">
        <div className="faq-box">
          <div className="faq-box-title">자주 찾는 질문</div>
          <ul className="faq-category">
            <li
              className={categoryNow === "전체보기" ? "on" : ""}
              onClick={() => setCategoryNow("전체보기")}
            >
              전체보기
            </li>
            <li
              className={categoryNow === "주문/결제" ? "on" : ""}
              onClick={() => setCategoryNow("주문/결제")}
            >
              주문/결제
            </li>
            <li
              className={categoryNow === "배송" ? "on" : ""}
              onClick={() => setCategoryNow("배송")}
            >
              배송
            </li>
            <li
              className={categoryNow === "교환/반품" ? "on" : ""}
              onClick={() => setCategoryNow("교환/반품")}
            >
              교환/반품
            </li>
          </ul>
          <ul className="faq-list">{makeFaqList}</ul>
          <div className="more-btn">더보기</div>
        </div>
        <div className="right-box">
          <div className="notice-box">
            <div className="notice-box-title">공지사항</div>
            <div className="notice-list">{makeNoticeList}</div>
          </div>
          <div className="event-box">
            <div className="event-box-title">이벤트</div>
            <div className="event-list">
              <div className="event-list-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/event_thumb1.jpg`}
                  alt="event_thumb1"
                />
              </div>
              <div className="event-list-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/event_thumb2.jpg`}
                  alt="event_thumb2"
                />
              </div>
              <div className="event-list-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/event_thumb3.jpg`}
                  alt="event_thumb3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

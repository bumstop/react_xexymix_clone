// Import react
import React, { useEffect } from "react";

// Import CSS
import "../css/index_style.css";

// Import swiper css (기본 스와이퍼 CSS)
import "swiper/css";

// Import layout
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

// Import components
import { QuickMenu } from "../components/quick_menu";
import { useNavigate } from "react-router-dom";

import { userInfoState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

export function Layout() {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  const code = new URL(window.location.href).searchParams.get("code");

  // 해시라우터를 사용함에 따라 카카오 redirect uri에 다른 페이지 지정 불가.
  // 따라서 메인 페이지로 이동시킨 후 메인페이지에서 조건 검사후 다시 로그인 페이지로
  // 날려주는 방식으로 문제 해결
  useEffect(() => {
    if (code?.length > 1 && localStorage.userInfo === undefined) {
      navigate("login");
    }
    if (code === undefined  && localStorage.userInfo?.length > 1 ) {
      navigate("mypage");
    }
  }, []);

  return (
    <>
      <Header />
      <QuickMenu />
      <Main />
      <Footer />
    </>
  );
}

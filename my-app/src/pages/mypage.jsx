import axios from "axios";
import { useEffect, useState } from "react";

// 카카오 로그아웃
export function KakaoLogout() {
  const userInfo = localStorage.userInfo ? localStorage.getItem("userInfo") : undefined;
  const accessToken = userInfo ? JSON.parse(userInfo).accessToken : undefined;
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  // const REDIRECT_URI = "http://localhost:3000"; // 빌드시 아래와 스위치 할것
  const REDIRECT_URI = "https://bumstop.github.io/react_xexymix_clone/";

  const CLIENT_ID_PARAMS = `client_id=${REST_API_KEY}`;
  const REDIRECT_URI_PARAMS = `logout_redirect_uri=${REDIRECT_URI}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/logout?${CLIENT_ID_PARAMS}&${REDIRECT_URI_PARAMS}`;

  const makeFormData = (params) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });

    return searchParams;
  };

  const [endTokenFetching, setEndTokenFetching] = useState(false);

  const endTokenRequest = async () => {
    if (endTokenFetching) return;
    try {
      setEndTokenFetching(true);
      const response = await axios({
        method: "POST",
        url: "	https://kapi.kakao.com/v1/user/logout",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);
      deleteLocalStorageProfile();
      setEndTokenFetching(false);
    } catch (error) {
      console.log(error);
      setEndTokenFetching(false);
    }
  };

  const deleteLocalStorageProfile = () => {
    localStorage.removeItem("userInfo");
    window.location.href = REDIRECT_URI;
  };

  return (
    // <a className="logout-btn" href={kakaoURL}>
    //   로그아웃
    // </a>
    <div className="logout-btn" onClick={endTokenRequest}>
      로그아웃
    </div>
  );
}

export function MyPage() {
  const REDIRECT_URI = "https://bumstop.github.io/react_xexymix_clone/";
  const userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : undefined;
  const userThumbnailImage = localStorage.userInfo ? userInfo.thumbnailImage : undefined;
  const userNickname = localStorage.userInfo ? userInfo.nickname : undefined;
  const myMenuList = [
    "주문내역",
    "쿠폰내역",
    "적립금내역",
    "예치금내역",
    "받은 선물함",
    "관심상품",
    "내 게시글 보기",
    "상품리뷰",
    "반품문의",
    "교환문의",
    "회원정보",
    "회원탈퇴",
  ];

  useEffect(() => {
    if (userInfo === undefined) {
      window.alert("로그인 후 이용해주세요");
      window.location.href = REDIRECT_URI;
    }
  }, []);
  return (
    <>
      <h2 className="mypage-title">마이페이지</h2>
      <div className="mypage-container">
        <div className="my-menu">
          {myMenuList.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </div>
        <div className="profile-container">
          <div className="profile-box">
            <div
              className="profile-image-box"
              style={{
                background: `url(${userThumbnailImage}) no-repeat center/cover`,
              }}
            ></div>
            <div className="nickname-box">
              {userNickname}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  marginLeft: "5px",
                }}
              >
                회원님
              </span>
            </div>
            <KakaoLogout />

            <div className="grade-view-btn">등급혜택 보기</div>
          </div>
          <div className="coupon-box profile-container__box">
            <p>쿠폰</p>
            <span>0</span>
          </div>
          <div className="point-box profile-container__box">
            <p>적립금</p>
            <span>0</span>
          </div>
          <div className="review-box profile-container__box">
            <p>작성 가능 리뷰</p>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}

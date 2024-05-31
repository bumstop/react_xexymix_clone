import { addressInfo } from "../data/address_info";
import { Link } from "react-router-dom";
const addressInfoKeys = Object.keys(addressInfo);
// const addressValues = Object.values(addressInfo);
const footerLeftMenus = [
  "브랜드 스토리",
  "회사소개",
  "이용약관",
  "개인정보처리방침",
  "고객센터",
];

function FooterLeft() {
  return (
    <div className="footer-left">
      <div className="footer-left-top">
        <Link to={"/home"}>
          <img src={`${process.env.PUBLIC_URL}/images/header_logo_bk.png`} alt="xexymix" />
        </Link>
        <span>
          애슬레저 1위, 브랜드 고객충성도 애슬레저룩 부문 3년 연속 대상 [2021. 2022. 2023]
        </span>
      </div>
      <ul className="footer-left-menu">
        {footerLeftMenus.map((v, i, a) => (
          <li key={v} style={{ display: "contents" }}>
            <span>
              <a href="#!">{v}</a>
            </span>
            {i < a.length - 1 && <div className="divide-bar"></div>}
          </li>
        ))}
      </ul>
      <address className="footer-left-info">
        {addressInfoKeys.map((v, i, a) => (
          <div className="info-box" key={v}>
            <div className="address-key-box">{v} :</div>
            <div className="address-value-box">{addressInfo[v]}</div>
          </div>
        ))}
        <div className="cr">
          Copyright 2015 Xexymix All Rights Reserved. Copied 2023 By Me ^^7.
        </div>
      </address>
    </div>
  );
}

function FooterRight() {
  return (
    <div className="footer-right">
      <div className="bank-info-box">
        <span>BANK INFO</span>
        <div>우리은행 &nbsp; 1005-703-294024</div>
        <div>국민은행 &nbsp; 431801-01-213327</div>
        <div>농 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 협 &nbsp; 301-0259-9190-41</div>
        <div>(주)브랜드엑스코퍼레이션</div>
        <div>입금자명 불일치시 자동연동이 되지않습니다.</div>
        <div>고객센터 또는 Q&A 문의주세요.</div>
      </div>
      <div className="sns-box">
        <span>SNS</span>

        <div className="sns-icon">
          <div>
            <a
              href="https://www.facebook.com/xexymix/"
              target="_blank"
              rel="noreferrer noopener">
              <img src={`${process.env.PUBLIC_URL}/images/footer_fb.png`} alt="xexymix-facebook" />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/xexymix/"
              target="_blank"
              rel="noreferrer noopener">
              <img src={`${process.env.PUBLIC_URL}/images/footer_insta.png`} alt="xexymix-instagram" />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UC24_5gTJkc-hDaEuG4DNbeQ"
              target="_blank"
              rel="noreferrer noopener">
              <img src={`${process.env.PUBLIC_URL}/images/footer_youtube.png`} alt="xexymix-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="shop-menu-box">
        <span>SHOP MENU</span>
        <div>
          <a href="#!">공지사항</a>
        </div>
        <div>
          <a href="#!">회원정책</a>
        </div>
        <div>
          <a href="#!">전국매장안내</a>
        </div>
        <div>
          <a href="#!">강사회원</a>
        </div>
        <div>
          <a href="#!">기업회원</a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-inbox">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
    </footer>
  );
}

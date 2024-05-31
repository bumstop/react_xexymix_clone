// Import react
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
// Import react-router
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
// Import recoil
import { RecoilRoot } from "recoil";
// Import pages
import { Layout } from "./layout/layout";
import { Home } from "./pages/home";
import { New } from "./pages/new";
import { Best } from "./pages/best";
import { Woman } from "./pages/woman";
import { Man } from "./pages/man";
import { Community } from "./pages/community";
import { Search } from "./pages/search";
import { Product } from "./pages/product";
import { Login } from "./pages/login";
import { MyPage } from "./pages/mypage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }, []);

  // "homepage": "https://bumstop.github.io/react_xexymix_clone/",
  return (
    <RecoilRoot>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="home" element={<Home />} />

            {/* 신상할인 */}
            <Route path="new" element={<New />} />
            {/* 베스트 */}
            <Route path="best" element={<Best />} />
            {/* 우먼즈 */}
            <Route path="woman" element={<Woman />} />
            {/* 맨즈 */}
            <Route path="man" element={<Man />} />
            {/* 커뮤니티 */}
            <Route path="community" element={<Community />} />

            {/* 검색 페이지 */}
            <Route path="search" element={<Search />} />

            {/* 로그인 페이지 */}
            <Route path="login" element={<Login />} />

            {/* 마이페이지 */}
            <Route path="mypage" element={<MyPage />} />
            {/* 상품 상세 페이지 */}
            <Route path="product/:productId" element={<Product />} />
          </Route>
        </Routes>
      </HashRouter>
    </RecoilRoot>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

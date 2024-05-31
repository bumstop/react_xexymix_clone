import { useEffect, useState } from "react";
import { Gnb } from "../components/gnb";
import { TopBanner } from "../components/top_banner";

export function Header() {
  const [isScrollTop, setIsScrollTop] = useState(true);

  const checkTop = () => {
    let scTop = window.scrollY;
    if (scTop >= 100 && isScrollTop) {
      setIsScrollTop(false);
    } else if (scTop < 100 && !isScrollTop) {
      setIsScrollTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkTop);

    return () => {
      window.removeEventListener("scroll", checkTop);
    };
  });

  return (
    <header id="header" className={isScrollTop ? "" : "non-top"}>
      <TopBanner />
      <Gnb />
    </header>
  );
}

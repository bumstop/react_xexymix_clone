export interface Sub {
  txt: string;
  type?: string;
  link: string;
}

export interface GnbCategory {
  txt: string;
  link: string;
  sub?: Sub[];
}

export interface RightBtnMenu {
  txt: string;
  link: string | null;
}

interface GnbMenu {
  gnbCategory: GnbCategory[];
  rightBtnMenu: RightBtnMenu[];
}

export const gnbMenu: GnbMenu = {
  gnbCategory: [
    { txt: "신상할인", link: "/new" },
    { txt: "베스트", link: "/best" },
    {
      txt: "우먼즈",
      link: "/woman",
      sub: [
        { txt: "레깅스", type: "leggings", link: "/woman" },
        { txt: "테이퍼드팬츠", type: "tapered", link: "/woman" },
        { txt: "상의", type: "top", link: "/woman" },
        { txt: "하의", type: "bottom", link: "/woman" },
        { txt: "아우터", type: "outer", link: "/woman" },
      ],
    },
    {
      txt: "맨즈",
      link: "/man",
      sub: [
        { txt: "상의", type: "top", link: "/man" },
        { txt: "하의", type: "bottom", link: "/man" },
        { txt: "아우터", type: "outer", link: "/man" },
      ],
    },
    {
      txt: "커뮤니티",
      link: "/community",
      sub: [
        { txt: "이벤트", link: "/community/event" },
        { txt: "공지사항", link: "/community/notice" },
        { txt: "고객만족센터", link: "/community/cscenter" },
        { txt: "웹진", link: "/community/webzine" },
      ],
    },
  ],
  rightBtnMenu: [
    { txt: "search", link: null },
    { txt: "cart", link: "/cart" },
    { txt: "login", link: "/login" },
    { txt: "mypage", link: "/mypage" },
  ],
};

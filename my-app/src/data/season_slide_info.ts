export interface SeasonSlideInfo {
    id: string;
    imgSrc: string;
    name: string;
    type: string[];
    option: string[];
    category: string;
    price: string;
    sale: string | null;
    iconContent: string[] | null;
    descMain: string | null;
    descSub: string | null;
}

export const seasonSlideInfo: SeasonSlideInfo[] = [
  {
    id: "92",
    imgSrc: "/images/season_slide/season_1-1.jpg",
    name: "쉐르파 하이넥 점퍼 페일오렌지",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "132000",
    sale: null,
    iconContent: ["신상"],
    descMain: "[10/23(월) 11AM까지 혜택릴레이특가]",
    descSub: "주간 아우터 판매 1위 #품절주의",
  },
  {
    id: "93",
    imgSrc: "/images/season_slide/season_2-1.jpg",
    name: "내핑 후드 집업 밀크베이지",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "79000",
    sale: "64000",
    iconContent: ["이벤트특가", "신상"],
    descMain: "[10/23(월) 11AM까지 혜택릴레이특가]",
    descSub: "기모 안감으로 포근하게! #4년 연속 아우터 판매 1위",
  },
  {
    id: "94",
    imgSrc: "/images/season_slide/season_3-1.jpg",
    name: "웜 코튼 루즈핏 스트링 후드 집업 파인그린",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "89000",
    sale: "75000",
    iconContent: ["신상"],
    descMain: "부드러운 기모로 포근하게!",
    descSub: "#투웨이 핏 조절",
  },
  {
    id: "36",
    imgSrc: "/images/season_slide/season_4-1.jpg",
    name: "하이넥 웰론 패딩 도버크림",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "139000",
    sale: "122500",
    iconContent: ["이벤트특가", "신상"],
    descMain: "[10/27(금) 2PM까지 5% 신상할인]",
    descSub: null,
  },
  {
    id: "95",
    imgSrc: "/images/season_slide/season_5-1.jpg",
    name: "하이넥 랩 패딩 자켓 카라멜브라운",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "149000",
    sale: "132000",
    iconContent: ["신상"],
    descMain: "[10/24(화) 2PM까지 5% 신상할인]",
    descSub: null,
  },
  {
    id: "96",
    imgSrc: "/images/season_slide/season_6-1.jpg",
    name: "핑거홀 경량 패딩 저지 자켓 블랙",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "86000",
    sale: "72200",
    iconContent: ["신상"],
    descMain: "[10/27(금) 2PM까지 5% 신상할인]",
    descSub: null,
  },
  {
    id: "97",
    imgSrc: "/images/season_slide/season_7-1.jpg",
    name: "소프트 골지 버튼 롱슬리브 블랙",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "46000",
    sale: "36000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "98",
    imgSrc: "/images/season_slide/season_8-1.jpg",
    name: "X-하이커 LT 블랙베이지",
    type: ["shoes"],
    option: ["230", "240", "250", "260", "270"],
    category: "UNISEX",
    price: "109000",
    sale: "84500",
    iconContent: ["남여공용", "신상"],
    descMain: "[10/25(수) 2PM까지 5% 신상할인]",
    descSub: "#일상부터 가벼운 산행까지 #에어 메쉬로 쾌적함 UP!",
  },
];

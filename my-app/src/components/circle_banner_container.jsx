// const circleBannerItems: [string, string[]][] = [
const circleBannerItems = [
  ["yoga", ["요가 컬렉션", ""]],
  ["cacaopay", ["4천원", "즉시할인"]],
  ["tosspay", ["10%할인", "즉시적용"]],
  ["present", ["선물하기", "서비스 오픈"]],
  ["notice", ["회원 등급별", "혜택안내"]],
];

export function CircleBannerContainer() {
  return (
    <div className="circle-banner-container">
      {/* {circleBannerItems.map((v: [string, string[]]) => ( */}
      {circleBannerItems.map((v) => (
        <div className="circle-item" key={v[0]}>
          <a href="#!">
            <img src={`${process.env.PUBLIC_URL}/images/circle_banner/slide_${v[0]}.png`} alt="이미지" />
            <span className="circle-item-txt">
              {v[1][0]}
              <br />
              {v[1][1]}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}


// Import components
import { CircleBannerContainer } from "../components/circle_banner_container";
import { MainItemContainer } from "../components/main_item_container";
import { MainSlideContainer } from "../components/main_slide_container";
import { SeasonSlideContainer } from "../components/season_slide_container";
import { SubSlideContainer } from "../components/sub_slide_container";



export function Home() {

  return (
    <>
      <MainSlideContainer category={["MENS", "WOMENS"]}/>
      <CircleBannerContainer />
      <SeasonSlideContainer />
      <SubSlideContainer />
      <MainItemContainer />
    </>
  );
}

import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    accessToken: null,
    id: null,
    nickname: null,
    profileImage: null,
    thumbnailImage: null,
    isLogin: false,
  },
});
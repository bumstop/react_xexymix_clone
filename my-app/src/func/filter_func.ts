/**
 * val값을 모두 가지고 있는 객체를 리턴
 * @param {object} obj 필터 대상 객체
 * @param {string} key 필터링 기준이 되는 key 문자열
 * @param {Array} val 필터링 기준이 되는 value를 담은 배열
 * @returns obj를 리턴, key값의 val로 필터링
 */
// const filteredItemEvery = (obj, key, val) =>
//   obj.filter((v) => val.every((i) => v[key].includes(i)));

/**
 * val값을 가지고 있는 객체를 리턴
 * @param {object} obj 필터 대상 객체
 * @param {string} key 필터링 기준이 되는 key 문자열
 * @param {string} val 필터링 기준이 되는 value를 담은 문자열
 * @returns obj를 리턴, key값의 val로 필터링
 */
const filteredItem = (obj: Array<object>, key: string, val: string) =>
  obj.filter((v: any) => v[key] !== null && v[key].includes(val));
/**
 * val값과 정확히 일치하는 객체를 리턴
 * @param {object} obj 필터 대상 객체
 * @param {string} key 필터링 기준이 되는 key 문자열
 * @param {string} val 필터링 기준이 되는 value를 담은 문자열
 * @returns obj를 리턴, key값의 val로 필터링
 */

const filteredItemSame = (obj: Array<object>, key: string, val: string | string[]) =>
  obj.filter((v: any) => v[key].includes(val) && v[key].length === val.length);
/**
 * val값 하나만 가지고 있는 객체를 리턴
 * @param {object} obj 필터 대상 객체
 * @param {string} key 필터링 기준이 되는 key 문자열
 * @param {string} val 필터링 기준이 되는 value를 담은 문자열
 * @returns obj를 리턴, key값의 val로 필터링
 */
const filteredItemOne = (obj: Array<object>, key: string, val: string) =>
  obj.filter((v: any) => v[key].length === 1 && v[key].includes(val));

export { filteredItem, filteredItemOne, filteredItemSame };

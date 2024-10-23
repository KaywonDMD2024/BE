// PocketBase 아이템의 기본 구조를 정의하는 인터페이스
/**
 * @typedef {Object} PocketBaseItem
 * @property {string} collectionId
 * @property {string} id
 * @property {Object.<string, any>} [key]
 */

/**
 * 매개변수는 포켓호스트 URL, 처리해줄 record id, fileName(기본값 photo)
 * @param {string} url
 * @param {PocketBaseItem} item
 * @param {string} [fileName='photo']
 * @returns {string}
 */
export const getPbImageURL = (url, item, fileName = 'photo') => {
  if (item[fileName]) {
      return `${url}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
  }
  return '';
};

// 이미지가 여러 장일 때
/**
 * @param {number} index
 * @param {PocketBaseItem} item
 * @param {string} [fileName='photo']
 * @returns {string}
 */
export const getPbImagesURL = (index, item, fileName = 'photo') => {
  return `${import.meta.env.VITE_PB_URL}api/files/${item.collectionId}/${item.id}/${item[fileName][index]}`;
};

/**
 * @fileoverview imgファイル操作用util
 */

/**
 * 画像を4件のみに絞り込む
 * @param imgFiles 
 * @returns 
 */
export const catsImgSpliceMax4 = (imgFiles: string[]): string[] => {
  if (4 < imgFiles.length) {
    imgFiles.splice(4, imgFiles.length - 1);
  }
  return imgFiles;
}

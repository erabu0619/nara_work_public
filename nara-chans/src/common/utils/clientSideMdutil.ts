import { toJaFormat } from "./dateutil";

/**
 * 受け取ったファイル名から日時を切り取る  
 * 先頭にyyyyMMddの形でなければ取得できない  
 * ファイル名(例):20240130-java-000000000000.md  
 * 
 * @param fileName 
 * @returns 
 */
export const getDateCreated = (fileName:string) => {

  // 日時だけ切り取る
  const slashLastIndex:number = fileName.lastIndexOf("/")
  const date = fileName.substring(slashLastIndex + 1,slashLastIndex + 9);

  return toJaFormat(date);
}
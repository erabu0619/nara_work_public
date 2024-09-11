import path from "path";
import { latestTagKind } from "../const";
import { latestValueType } from "../types/constTypes";
import { isPeriod } from "./dateutil";
// import fs from 'fs';

// TODO fs調査
/**
 * パス先のファイルをすべて取得する
 * @returns 
 */
// export const getFiles = (path: string): string[] => {
//   const fsPath: fs.PathLike = path;
//   const files: string[] = fs.readdirSync(fsPath);
//   return files;
// }

/**
 *  拡張子を取り除いてファイル名だけを返す
 * @param file 
 * @returns 切り出したファイル名
 */
export const getArticleName = (file:string):string => {
  return path.parse(file).name;
}


// TODO fs調査
/**
 * 最新情報をXmlファイルから取得する
 * get latest for XML
 * @returns 取得した値を、latestValueType型の配列にして返す
 */
// export const getLatestXml = (): latestValueType[] => {

//   // preparation
//   const fs = require("fs");
//   const DOMParser = require("xmldom").DOMParser;

//   // xmlファイル読込
//   const file = fs.readFileSync(process.env.NEXT_PUBLIC_LATEST_ROOT_PATH, 'utf-8');
//   const doc = new DOMParser().parseFromString(file);

//   const valueTagList = doc.getElementsByTagName([latestTagKind.value]);

//   let xmlResult: latestValueType[] = [];

//   for (let i = 0; i < valueTagList.length; ++i) {
//     xmlResult.push(toLatestType(valueTagList[i]));
//   }

//   if (xmlResult != null && 0 < xmlResult.length) {
//     xmlResult = getLatestMax3(xmlResult);
//   }

//   return xmlResult;
// }

/**
 * @param xmlResult 
 * @returns 期間内の新着情報を最大3件まで出力する
 */
export const getLatestMax3 = (xmlResult: latestValueType[]): latestValueType[] => {

  let xmlResultLatestMax3: latestValueType[] = [];
  const MAX_VALUE_3: number = 3;

  // 期間check
  xmlResult.map((value) => {
    if (isPeriod(value.startDate, value.endDate)) {
      xmlResultLatestMax3.push(value);
    }
  })

  // 個数check
  if (MAX_VALUE_3 < xmlResultLatestMax3.length) {
    xmlResultLatestMax3.splice(MAX_VALUE_3, xmlResultLatestMax3.length - 1);
  }
  // 作成した値を詰めなおす
  return xmlResultLatestMax3;
}

/**
 * 最新情報をObjectに入れる
 * @param valueTagList 
 * @returns latestValueType オブジェクトにして返す
 */
export const toLatestType = (valueTagList: any): latestValueType => {
  return {
    startDate: valueTagList.getElementsByTagName(latestTagKind.startDate)[0].childNodes[0].data,
    endDate: valueTagList.getElementsByTagName(latestTagKind.endDate)[0].childNodes[0].data,
    date: valueTagList.getElementsByTagName(latestTagKind.date)[0].childNodes[0].data,
    category: valueTagList.getElementsByTagName(latestTagKind.category)[0].childNodes[0].data,
    text: valueTagList.getElementsByTagName(latestTagKind.text)[0].childNodes[0].data,
  }
}
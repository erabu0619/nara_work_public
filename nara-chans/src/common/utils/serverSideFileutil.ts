import { latestTagKind } from "../const";
import { latestValueType } from "../types/constTypes";
import {getLatestMax3, toLatestType} from "./fileutil";
// import {  } from "module";

/**
 * パス先のファイルをすべて取得する
 * @returns 
 */
export const getFiles = (path: string): string[] => {
  const fs = require("fs");
  // const fsPath: fs.PathLike = path;
  const fsPath: any = path;
  const files: string[] = fs.readdirSync(fsPath);
  return files;
}

/**
 * 最新情報をXmlファイルから取得する
 * get latest for XML
 * @returns 取得した値を、latestValueType型の配列にして返す
 */
export const getLatestXml = (): latestValueType[] => {

  // preparation
  const fs = require("fs");
  const DOMParser = require("xmldom").DOMParser;

  // xmlファイル読込
  const file = fs.readFileSync(process.env.NEXT_PUBLIC_LATEST_ROOT_PATH, 'utf-8');
  const doc = new DOMParser().parseFromString(file);

  const valueTagList = doc.getElementsByTagName([latestTagKind.value]);

  let xmlResult: latestValueType[] = [];

  for (let i = 0; i < valueTagList.length; ++i) {
    xmlResult.push(toLatestType(valueTagList[i]));
  }

  if (xmlResult != null && 0 < xmlResult.length) {
    xmlResult = getLatestMax3(xmlResult);
  }

  return xmlResult;
}
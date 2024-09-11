import path from "path"
import { getArticleName } from "./fileutil";
import {  getFiles } from "./serverSideFileutil";
import { articleListType } from "../types/constTypes";
import matter from "gray-matter";

/**
 * programming記事のURIを取得する
 * @param file
 * @returns 作成したURI
 */
export const getArticleURI = (file: string): string => {
  const fileName = getArticleName(file);
  return "/programming/" + fileName;
}

/**
 * マークダウンの記事を取得して  
 * 記事の内容を返す
 * 
 * @param file 
 * @returns 記事の内容
 */
export const getArticleValue = (file: string) => {
  const fs = require("fs");
  const fullPath = path.join(process.env.NEXT_PUBLIC_MD_ROOT_PATH || "", `${file}.md`)
  const fileVal = fs.readFileSync(fullPath, 'utf8');

  return fileVal;
}

/**
 * 全てのマークダウンの情報を取得すし、以下のdataを返す
 * ・title
 * ・category
 * ・URI
 * @returns articleList 
 */
export const getArticleDataMax = (): articleListType[] => {

  // 全てのファイル名を取得してくる
  const path = process.env.NEXT_PUBLIC_MD_ROOT_PATH;
  let mdFiles: string[] = [];
  if (path) {
    mdFiles = getFiles(path);
  } else {
    console.log("環境変数が取得できていません")
  }

  // 必要なdataを取得して返す
  return getArticleList(mdFiles)
}

/**
 * 全てのマークダウンの情報を取得すし、以下のdataを返す
 * ・title
 * ・category
 * ・URI
 * @returns articleList 
 */
export const getArticleDataMax3 = (): articleListType[] => {

  // 全てのファイル名を取得してくる
  const path = process.env.NEXT_PUBLIC_MD_ROOT_PATH;
  let mdFiles: string[] = [];
  if (path) {
    mdFiles = getFiles(path);
    
    // 最新順にソート
    mdFiles.sort(function (a, b) {
      return (a < b ? 1 : -1);
    });

    // 3件に絞り込み
    mdFiles = mdFilsNameMax3(mdFiles)
  } else {
    console.log("環境変数が取得できていません")
  }

  // 必要なdataを取得して返す
  return getArticleList(mdFiles)
}

const mdFilsNameMax3 = (mdFiles: string[]): string[] => {
  if (3 < mdFiles.length) {
    mdFiles.splice(3, mdFiles.length - 1);
  }
  return mdFiles;
}


/**
 * 受け取ったmdFiles(ファイル名リスト)を使って  
 * マークダウン内のdataを取得する
 * @param mdFiles 
 * @returns 
 */
const getArticleList = (mdFiles: string[]): articleListType[] => {
  // 必要なデータの取得
  const articleList: articleListType[] = [];

  for (let i = 0; i < mdFiles.length; ++i) {
    // 拡張子を取り除く
    const articleName = getArticleName(mdFiles[i]);

    // title、内容を分ける
    const { data, content } = matter(getArticleValue(articleName));

    articleList.push({
      mdFileURI: getArticleURI(mdFiles[i]),
      title: data.title,
      category: data.category
    })
  }

  return articleList;
}
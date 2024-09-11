/**
 * @fileoverview 定数定義
 */
import { catsImgNameType, catsNumType, catsIntroductionTextType, catsNumReplaceType, latestType, stringType, articleCategoryType } from "../types/constTypes"
import { replaceKeyAndValue } from "../utils/objectUtils"

/**
 * 猫固有番号
 * 分かりやすいように番号を振っておく
 */
export const catsNum: catsNumType = {
  Nara: 1,
  Chachamaru: 2,
  Sadakichi: 3,
  An: 4,
}

/**
 * catsNumオブジェクトのkeyとvalueを入れ替えた値
 */
export const catsNumReplace:catsNumReplaceType = replaceKeyAndValue(catsNum);

/**
 * 猫紹介用データ
 * MIXの場合は、「,」区切り
 * 例)MIX,(サイベリアン x ベンガル)
 */
export const catsIntroductionText: catsIntroductionTextType = {
  Nara: {
    imgName:"NARA_INTRODUCTION.jpg",
    name: "なら",
    sex: "おんなのこ",
    catType: "サイベリアン",
    birthday: "2020/01/29生まれ"
  },
  Chachamaru: {
    imgName:"CHACHA_INTRODUCTION.jpg",
    name: "茶々丸",
    sex: "おとこのこ",
    catType: "サイベリアン",
    birthday: "2020/10/30生まれ"
  },
  Sadakichi: {
    imgName:"SADA_INTRODUCTION.jpg",
    name: "定吉",
    sex: "おとこのこ",
    catType: "ベンガル",
    birthday: "2022/06/12生まれ"
  },
  An: {
    imgName:"AN_INTRODUCTION.jpg",
    name: "あん",
    sex: "おんなのこ",
    catType: "MIX,(ノルウェージャン × アメリカンショートヘア)",
    birthday: "2023/02/19生まれ"
  },
}

/* 猫画像 名前略 */
export const catsImgName: catsImgNameType = {
  All:"ALL",
  Nara: "NR",
  Chachamaru: "CCM",
  Sadakichi: "SDK",
  An: "AN",
}


/* 新着情報タグ情報 */
export const latestTagKind:latestType = {
  value:"value",
  startDate:"startDate",
  endDate:"endDate",
  date:"date",
  category:"category",
  text:"text",
}

/* 記事カテゴリ名 */
export const articleCategory:stringType = {
  java: "Java",
  ts: "Typescript",
  react: "React",
  sb: "SpringBoot",
  li: "Linux",
  os: "os作成",
  nw: "ネットワーク",
  book: "本",
  cplus: "C++",
  nj:"Next.js"
}

// SEO対策
export type MetaTypes = {
  title?: string;
  titleTemplate?: string;
  description?: string;
  ogType?: string;
  imgUrl?: string;
};

// 共通 もしキーを変数で取りたいときはこの型で指定する
export type stringType = {
  [K in string]: string;
};

// 猫の名前用
export type catsImgNameType = {
  All: string;
  Nara: string;
  Chachamaru: string;
  Sadakichi: string;
  An: string;
};

// 猫の名前ナンバリング用
export type catsNumType = {
  Nara: number,
  Chachamaru: number,
  Sadakichi: number,
  An: number,
};
export type catsNumReplaceType = {
  [K in string]: string;
};

// 猫自己紹介用
type catIntroductionType = {
  imgName: string,
  name: string,
  sex: string,
  catType: string,
  birthday: string,
};
export type catsIntroductionTextType = {
  [K in string]: catIntroductionType;
};

// 最新記事用
export type latestType = {
  value: string,
  startDate: string,
  endDate: string,
  date: string,
  category: string,
  text: string,
};

// 最新記事 xml値用
export type latestValueType = {
  startDate: string,
  endDate: string,
  date: string,
  category: string,
  text: string,
};

// マークダウン記事のカテゴリ
export type articleCategoryType = {
  java: string,
  ts: string,
  react: string,
  sb: string,
  li: string,
  os: string,
  nw: string,
  book: string,
  cplus: string,
  nj: string
};

// 記事リスト
export type articleListType = {
  mdFileURI: string,
  title: string,
  category:string,
  description?:string
};
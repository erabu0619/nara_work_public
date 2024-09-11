import { articleCategory } from "@/common/const";
import { articleListType } from "@/common/types/constTypes";
import { NextRouter } from "next/router";
import { ArticleTwmoji } from "./ArticleTwmoji";
import styles from '@/styles/articles.module.css';

// 記事一覧部品
type Props = {
  articleList: articleListType[],
  router: NextRouter
}

/**
 * @fileoverview 記事一覧コンポーネント
 * @param articleList マークダウン内のdata
 * @param router
 * @returns 
 */
const Articles = ({ articleList, router }: Props) => {

  const onClick = (url: string) => {
    router.push(url)
  }

  return articleList.map((article, index) => {
    return (
      <div
        className={styles.articleList_component}
        key={index}
        onClick={
          () =>
            onClick(article.mdFileURI)
        }
      >
        <ArticleTwmoji articleType={article.category} />
        <div className={styles.articleList_component_title}>{article.title}</div>
        <label
          className={styles.articleList_component_label}
          style={labelColor(article.category)}
        >
          {articleCategory[article.category]}
        </label>
      </div>
    )
  })
}


/**
 * labelごとに色を変える
 */
const labelColor = (category: string) => {
  const articleTypeResult = articleCategory[category];

  switch (articleTypeResult) {
    case articleCategory.java: return (
      { backgroundColor: "#E67E22" }
    );
    case articleCategory.ts: return (
      { backgroundColor: "#0B40B4" }
    );
    case articleCategory.react: return (
      { backgroundColor: "#20C0B2" }
    );
    case articleCategory.sb: return (
      { backgroundColor: "#3EC020" }
    );
    case articleCategory.li: return (
      { backgroundColor: "#AEB6BF" }
    );
    case articleCategory.nw: return (
      { backgroundColor: "red" }
    );
    case articleCategory.cplus: return (
      { backgroundColor: "#F74767" }
    );
    case articleCategory.nj: return (
      { backgroundColor: "#47C1F7" }
    );
    case articleCategory.os: return (
      { backgroundColor: "#2C3E50" }
    );
    case articleCategory.book: return (
      { backgroundColor: "#305606" }
    );
  }
}


export default Articles;
import { GetStaticProps } from "next"
import { ClassAttributes, HTMLAttributes, useRef } from "react";

import remarkGfm from 'remark-gfm';
import matter from 'gray-matter'
import Link from "next/link";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ReactMarkdown, { ExtraProps } from 'react-markdown';
import SyntaxHighlighter from "react-syntax-highlighter";

import styles from "@/styles/programming.module.css"
import { toJaFormat } from "@/common/utils/dateutil";
import TableOfContent from "@/component/TableOfContent";
import { getArticleName } from "@/common/utils/fileutil";
import { getFiles } from "@/common/utils/serverSideFileutil";
import { getArticleValue } from "@/common/utils/serverSideMdutil";
import { Seohead } from "@/component/Seohead";

type Props = {
  article: string
  title: string,
  description: string
  date: string;
}

/**
 * @fileoverview プログラミング記事　詳細
 * @returns 
 */
const Article = ({ article, title, description, date }: Props) => {

  // 作成日時
  const dateCreatedRef = useRef<string>("");
  dateCreatedRef.current = toJaFormat(date);

  // コードブロック用のコンポーネント
  const Pre = (
    { children, ...props }: ClassAttributes<HTMLPreElement>
      & HTMLAttributes<HTMLPreElement>
      & ExtraProps
  ) => {

    if (!children || typeof children !== 'object') {
      return <code {...props}>{children}</code>;
    }

    const childType = 'type' in children ? children.type : '';

    if (childType !== 'code') {
      return <code {...props}>{children}</code>;
    }

    // コードブロックがmdファイル内に含まれている場合の処理
    const childProps = 'props' in children ? children.props : {};
    const { className, children: code } = childProps;
    const language = className?.replace('language')

    return (
      <SyntaxHighlighter language={language} style={dark}>{String(code).replace(/\n$/, '')}</SyntaxHighlighter>
    )
  }

  // headingタグにidを付与する
  const HEADING = ({
    node,
    children,
  }: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps) => {

    const title =
      node?.children[0] && 'value' in node?.children[0]
        ? node?.children[0].value
        : '';

    const switchHeading = (tagName: string) => {
      switch (tagName) {
        case "h2":
          return (
            <h2 id={title}>
              {children}
            </h2>
          );
        case "h3":
          return (
            <h3 id={title}>
              {children}
            </h3>
          );
        case "h4":
          return (
            <h4 id={title}>
              {children}
            </h4>
          );
      }
    }
    return (
      switchHeading(node?.tagName || "")
    )
  }

  return (
    <>
      <Seohead
        titleTemplate={title}
        description={description}
        ogType={"website"}
      />
      <div className={styles.article_component}>
        {/* 記事エリア */}
        <div className={styles.article_main}>
          <div className={styles.self_introduction}>
            <img src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/profile/profile_img.png"} alt="プロフィール画像" />
            <div className={styles.article_sub_information}>
              <Link className={styles.article_sub_information_atag} href="/profile">作成者：ubare</Link>
              <div className={styles.article_creation_date}>作成日：{dateCreatedRef.current}</div>
            </div>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ pre: Pre, h2: HEADING, h3: HEADING, h4: HEADING }}>{article}</ReactMarkdown>
        </div>
        <div className={styles.sub_area}>
          <TableOfContent />
        </div>
      </div>
    </>
  )
}

/**
 * ## markdownページの生成
 * * mdフォルダ内のファイルを取得
 * * 対象ファイルの拡張子を取り除く
 * * ビルドする段階で、ブログ記事を生成する
 */
export async function getStaticPaths() {

  // 対象ファイルをすべて取得する
  const path = process.env.NEXT_PUBLIC_MD_ROOT_PATH;
  let mdFiles: string[] = [];
  if (path) {
    mdFiles = getFiles(path);
  } else {
    console.log("環境変数が取得できていません")
  }

  // 拡張子を取り除く
  let mdNameList: string[] = [];
  for (let mdFile of mdFiles) {
    mdNameList.push(getArticleName(mdFile));
  }

  let paths: object[] = [];
  for (let mdName of mdNameList) {
    paths.push({ params: { article: mdName } })
  }

  return {
    paths: paths,
    // 存在しないページにアクセスした際に自動的にページを作成する
    fallback: false,
  }
}

/**
 * ## mdファイルの情報を取得してフロントへ渡す
 * @param param
 * @returns 取得したmdのvalue
 */
export const getStaticProps: GetStaticProps = async ({ params }: any) => {

  // metadataを抜き出した本文だけを返す
  // object → JSON → string
  const { content, data } = matter(getArticleValue(params.article));
  const article: string = JSON.parse(JSON.stringify(content));

  return {
    props: {
      article: article,
      title: data.title || "プログラミング記事",
      description: data.description || "プログラミング記事",
      date: data.date ? data.date.toString() : "20240101"
    }
  }
}

export default Article;
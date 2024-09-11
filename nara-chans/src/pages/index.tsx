/**
 * @fileoverview Homeページ(TOP)
 */
import { NextRouter, useRouter } from 'next/router'
import { articleListType, latestValueType } from "@/common/types/constTypes";
import { getFiles, getLatestXml } from "@/common/utils/serverSideFileutil";
import { catsImgSpliceMax4 } from "@/common/utils/imgFileutil";
import { GetStaticProps } from "next";
import { getArticleDataMax3 } from '@/common/utils/serverSideMdutil';
import Articles from '@/component/Articles';
import { Seohead } from '@/component/Seohead';

type Props = {
  xmlResult: latestValueType[];
  catsImgFiles: string[];
  articleList: articleListType[];
}

const Home = (props: Props) => {
  const { xmlResult, catsImgFiles, articleList } = props;
  const router = useRouter();

  return (
    <>
      <Seohead
        titleTemplate={"ホーム"}
        description={"かわいい猫の紹介と、新人プログラマーの学習記録です"}
        ogType={"website"}
      />
      {/* 最近のならちゃんずエリア */}
      <div className="main_content">
        <h2>最近のならちゃんず</h2>
        <div className="cats_area" >
          {createImgFilesDisp(catsImgFiles)}
        </div>
        <div className="latest_button_area">
          <button
            className="latest_button"
            type="submit"
            onClick={() => router.push("/cats")}>
            もっと見る
          </button>
        </div>
      </div>

      {/* 最新記事エリア */}
      <div className="main_content">
        <h2>最新記事(プログラミング)</h2>
        {articlesDisp(articleList, router)}
      </div>
      <div className="latest_area">
        {/* <!--header部分--> */}
        <div>
          <h2>
            <picture>
              <source src="" type="" media="" />
              <img src=""></img>
            </picture>
            <span>新着情報</span>
          </h2>
        </div>
        <div className="latest_table">
          <table>
            <tbody>
              {createLatestDisp(xmlResult)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

/**
 * 初期表示準備
 * @returns 
 */
export const getStaticProps: GetStaticProps = async () => {

  // 最新情報を取得する
  const xmlResult = getLatestXml();

  // 猫の画像を取得する
  let catsImgFiles: string[] = [];
  if (process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH_SERVER) {
    catsImgFiles = getFiles(process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH_SERVER);

    // 最新順にソート
    catsImgFiles.sort(function (a, b) {
      return (a < b ? 1 : -1);
    });

    catsImgFiles = catsImgSpliceMax4(catsImgFiles);
  } else {
    console.log("環境変数が取得できていません")
  }

  // マークダウン情報を取得する 最大3件
  const articleList: articleListType[] = getArticleDataMax3();

  return {
    props: {
      xmlResult: xmlResult,
      catsImgFiles: catsImgFiles,
      articleList: articleList,
    }
  }
}

/**
 * 最新情報imgComp
 * @param imgFiles 
 * @returns 
 */
const createLatestDisp = (xmlResult: latestValueType[]) => {

  return xmlResult.map((value, index) => {
    return (
      <tr key={index}>
        <td className="is_date">{value.date}</td>
        <td className="is_category">
          <span className="icon">{value.category}</span>
        </td>
        <td className="is_text">
          <a>{value.text}</a>
        </td>
      </tr>
    )
  })
}

/**
 * 猫imgComp
 * @param imgFiles 
 * @returns 
 */
const createImgFilesDisp = (imgFiles: string[]) => {
  return imgFiles.map((imgFile, index) => {
    return (
      <div className="latest_article" key={index}>
        <img className="latest_photo" src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/cats/" + imgFile} />
      </div>
    )
  })
}

// 最新記事表示用
const articlesDisp = (articleList: articleListType[], router: NextRouter) => {
  if (0 < articleList.length) {
    return (
      <>
        <div className="articleListMain">
          <Articles articleList={articleList} router={router} />
        </div>
        <div className="latest_button_area">
          <button className="latest_button" type="submit" onClick={() => router.push("/programming")}>もっと見る</button>
        </div>
      </>
    )
  } else {
    return (
      <div className="articleListMain">
        <div className="notExist">現在、記事は作成中です</div>
      </div>
    )
  }
}

export default Home;
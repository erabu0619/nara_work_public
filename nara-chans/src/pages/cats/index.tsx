import { GetStaticProps } from "next"
import { catsImgName } from "@/common/const";
import { useEffect, useRef, useState } from "react";
import { getFiles } from "@/common/utils/serverSideFileutil";
import style from "@/styles/cat.module.css"
import { Seohead } from "@/component/Seohead";

/**
 * 猫imgComp
 * @param imgFiles 
 * @returns 
 */
const createImgFilesDisp = (imgFiles: string[]) => {
  return imgFiles.map((imgFile, index) => {
    return (
      <div className={style.cat_photo_collection} key={index}>
        <img src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/cats/" + imgFile} />
      </div>
    )
  })
}

/**
 * セレクトボックスで選択された猫の画像リストを作る
 * @param imgFiles 
 * @param selectCatName 
 * @returns 猫imgリスト
 */
const getCatNameImgList = (imgFiles: string[], selectCatName: string): string[] => {
  let choiceCatNameList = [];

  if (selectCatName === catsImgName.All) {
    return imgFiles;
  }

  for (let imgFile of imgFiles) {
    // img画像の -から.jpgの間の猫固有文字を取得する
    if (imgFile.substring(imgFile.indexOf('-') + 1, imgFile.indexOf('.')) === selectCatName) {
      choiceCatNameList.push(imgFile);
    }
  }
  return choiceCatNameList;
}

type Props = {
  imgFiles: string[];
}

/**
 * @fileoverview ねこの写真一覧
 * @param props 
 * @returns ならちゃんずの写真一覧
 */
const Cats = (props: Props) => {

  // ビルド時に取得したファイル ファイルの書き換えはしない
  const { imgFiles } = props;

  // 表示する画像をリストとして持つ
  const imgFilesRef = useRef<string[]>(imgFiles);
  const [catNameDisp, setCatNameDisp] = useState<string>(catsImgName.All);
  const [imgFilesDisp, setImgFilesDisp] = useState<JSX.Element[]>(createImgFilesDisp(imgFilesRef.current));

  useEffect(() => {
    // セレクトボックスの値が変更されたら猫リストを作成する
    imgFilesRef.current = getCatNameImgList(imgFiles, catNameDisp);
    setImgFilesDisp(createImgFilesDisp(imgFilesRef.current));
  }, [catNameDisp])

  return (
    <>
      <Seohead
        titleTemplate={"写真一覧"}
        description={"ならちゃんずのかわいい猫４匹の日々の写真です。"}
        ogType={"website"}
      />
      <div className="main_content">
        <div className={style.cats_main}>
          <div className={style.cats_select_area}>
            <div className={style.cats_select_value}>
              <button className={style.cats_select_button} type="button"></button>
              <select
                className={style.cats_select_menu}
                value={catNameDisp}
                onChange={(e) => setCatNameDisp(e.target.value)}
              >
                <option value={catsImgName.All}>ならちゃんず</option>
                <option value={catsImgName.Nara}>なら</option>
                <option value={catsImgName.Chachamaru}>茶々丸</option>
                <option value={catsImgName.Sadakichi}>定吉</option>
                <option value={catsImgName.An}>あん</option>
              </select>
            </div>
          </div>
          <div className={style.cats_photo_area}>
            {
              imgFilesDisp.length != 0
                ? imgFilesDisp
                : <div>対象の画像が存在しません</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  let imgFiles: string[] = [];
  // 猫の画像を取得する
  if (process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH_SERVER) {
    imgFiles = getFiles(process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH_SERVER);
    // 最新順にソート
    imgFiles.sort(function (a, b) {
      return (a < b ? 1 : -1);
    });

  } else {
    // TODO ログ管理
    console.log("環境変数が取得できていません")
  }

  return {
    props: {
      imgFiles: imgFiles,
    }
  }
}
export default Cats;
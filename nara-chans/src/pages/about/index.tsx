import { catsIntroductionText, catsNumReplace } from "@/common/const/index"
import { Seohead } from "@/component/Seohead"
import style from "@/styles/about.module.css"

type Props = {
  catName: string
}

const CatIntroductionComponent = ({ catName }: Props) => {
  const catIntroductionText = catsIntroductionText[catName];

  // MIXだけ猫名を二段に分割
  const catTypeList = catIntroductionText.catType.split(',');

  return (
    <li className={style.cat_introduction}>
      <img src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/introduction_cats/" + catIntroductionText.imgName} />
      <p className={style.cat_name_label}>{catIntroductionText.name}</p>
      <p>{catIntroductionText.sex}</p>
      <p>{catTypeList[0]}</p>
      {
        catTypeList.length > 1
          ? <p className={style.small_character}>{catTypeList[1]}</p>
          : <></>
      }
      <p>{catIntroductionText.birthday}</p>
    </li>
  )
}

/**
 * @fileoverview 猫自己紹介ページ
 * @returns 
 */
const About = () => {
  return (
    <>
      <Seohead
        titleTemplate={"猫について"}
        description={"ならちゃんずのかわいい猫４匹の自己紹介です。"}
        ogType={"website"}
      />
      <div className="container">
        <div className={style.introduction_area}>
          <div className={style.introduction_area_heading}>
            <img src="../img/common/nara_icon_transparency.png" />
            <h2>ならちゃんずメンバー紹介</h2>
          </div>
          <div className={style.introduction_area_main}>
            <ul>
              <CatIntroductionComponent catName={catsNumReplace[1]} />
              <CatIntroductionComponent catName={catsNumReplace[2]} />
              <CatIntroductionComponent catName={catsNumReplace[3]} />
              <CatIntroductionComponent catName={catsNumReplace[4]} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
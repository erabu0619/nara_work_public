import { Seohead } from "@/component/Seohead";
import styles from "@/styles/profile.module.css";

/**
 * @fileoverview プロフィール
 */
const Profile = () => {
  return (
    <>
      <Seohead
        titleTemplate={"管理者プロフィール"}
        description={"ならちゃんず管理者の紹介ページです。"}
        ogType={"website"}
      />
      <div className={styles.main}>
        <h2>プロフィール</h2>
        <h3>名前</h3>
        <p>ubare</p>
        <h3>ホームページ作成の経緯</h3>
        <p>2023年4月からプログラマーとして仕事をしていく中で、かわいい猫の記録と自身の学習記録としてサイトを立ち上げました。</p>
        <h3>経歴</h3>
        <ul>
          <li>高校卒業後、７年間陸上自衛官として勤務して退職</li>
          <li>監視センターでオペレーターとして半年間勤務。2023年４月から現在までプログラマーとして勤務中</li>
        </ul>
        <h3>スキル</h3>
        <h4>プログラミング言語</h4>
        <ul className={styles.indent_ul}>
          <li>Java(6ヶ月)</li>
          <li>Typescript(6ヶ月)</li>
          <li>C++(学習中)</li>
        </ul>
        <h4>DB</h4>
        <ul className={styles.indent_ul}>
          <li>Oracle</li>
          <li>PostgreSQL</li>
        </ul>
        <h4>ライブラリ</h4>
        <ul className={styles.indent_ul}>
          <li>SpringBoot</li>
          <li>Next.js</li>
        </ul>
        <h3>資格</h3>
        <ul>
          <li>CCNA(2022年10月取得)</li>
          <li>LPIC-1(2022年12月取得)</li>
          <li>Java Silver SE 11(2023年4月取得)</li>
          <li>基本情報技術者試験(2023年9月取得)</li>
        </ul>
      </div>
    </>
  )
}

export default Profile;
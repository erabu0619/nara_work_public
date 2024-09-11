import { Seohead } from "@/component/Seohead";
import styles from "@/styles/termsOfUse.module.css";

/**
 * @fileoverview 利用規約
 */
const termsOfUse = () => {
  return (
    <>
      <Seohead
        titleTemplate={"利用規約"}
        description={"ならちゃんずを利用する際の最低限の規約になります"}
        ogType={"website"}
      />
      <div className={styles.main}>
        <h2>ご利用上の注意</h2>
        <h3>サイトについて</h3>
        <p>我が家の猫たちと、管理人のプログラミング学習の記録を掲載するサイトです。</p>
        <p>当サイトではコンテンツ・情報については、正確な情報を提供するように努めておりますが、
          正確性や安全性を保障するものではありません。
          このサイトの利用によって生じた損害については当方では責任を負いかねますのでご了承ください。</p>
        <p>もし間違いや記述ミスを見つけた場合は、「お問い合わせ」よりgoogleフォームにてご連絡いただけますと幸いです。</p>
        <h3>リンクについて</h3>
        <p>リンクについては、好きなようにご利用ください</p>
        <h3>猫の画像について</h3>
        <p>我が家の猫の画像については、無断転載や無断利用することは禁止します。</p>
      </div>
    </>
  )
}

export default termsOfUse;
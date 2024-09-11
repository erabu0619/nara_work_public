import styles from "@/styles/footer.module.css";
import Link from "next/link";

/**
 * @fileoverview 共通Footer
 */
export const Footer = () => {
  return (
    <footer>
      <div className={styles.copyright_info}>
        ©2024 ならちゃんず All rights reserved.
      </div>
      <div className={styles.snstag}>
        <ul className={styles.link}>
        <li><Link href="/profile">管理者について</Link></li>
          <li><Link href="/termsOfUse">利用規約</Link></li>
          <li><Link href={process.env.NEXT_PUBLIC_GOOGLE_FORMS_URL || ""} target="_blank">お問い合わせ</Link></li>
        </ul>
        {/* SNS作成したら追加する */ }
        {/* <ul className={styles.sns_link}>
          <li><img className={styles.snsimg} src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/common/footer_icon1.png"} /></li>
          <li><img className={styles.snsimg} src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/common/footer_icon1.png"} /></li>
          <li><img className={styles.snsimg} src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/common/footer_icon1.png"} /></li>
        </ul> */}
      </div>
    </footer>
  )
}
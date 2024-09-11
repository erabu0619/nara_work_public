import style from "@/styles/header.module.css";
import Link from "next/link";

/**
 * @fileoverview 共通Header
 */
export const Header = () => {

  return (
    <header>
      <div className={style.header_icon_area}>
        <img src={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/common/header_icon.png"} alt="header画像です" className={style.header_icon} />
      </div>
      <div>
        {/* <!--(参考) https://www.e-sanwa.co.jp/sbs/column/20180323/--> */}
        <nav className={style.nav_main}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/cats">Cats</Link></li>
            <li><Link href="/programming">Programming</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
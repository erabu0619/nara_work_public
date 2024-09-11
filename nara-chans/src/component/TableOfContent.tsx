import style from "@/styles/tableOfContent.module.css"
import { useEffect, useState } from "react";
import { useHeadsObserver } from '@/hooks/useHeadsObserver'

type headings = {
  id: string | null,
  text: string | null,
  level: number | null
}

/**
 * @fileoverview 目次コンポーネント
 */
const TableOfContent = () => {

  const [headings, setHeadings] = useState<headings[]>();
  const { activeId } = useHeadsObserver()

  useEffect(() => {

    // 対象の目次タグ内の要素を抜き出す
    const elements = Array.from(
      document.querySelectorAll("h2,h3,h4")).map(
        (elem) => (
          {
            id: elem.id,
            text: elem.textContent,
            level: Number(elem.nodeName.charAt(1))
          }
        )
      )
    setHeadings(elements);
  }, [])

  return (
    <nav className={style.nav_main}>
      <ul>
        {headings?.map(heading => (
          <li key={heading.id}
            className={style[(getClassName(heading.level) || "")]}>
            <a href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id || "")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }}
              // 色とかを考える
              style={{
                fontWeight: (activeId === heading.id) ? "bold" : "normal"
              }}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}


// className付与用
const getClassName = (level: number | null) => {
  switch (level) {
    case 2:
      return 'head2'
    case 3:
      return 'head3'
    case 4:
      return 'head4'
    default:
      return null
  }
}

export default TableOfContent;
import { SetStateAction, useEffect, useRef, useState } from "react";

/**
 * 目次用  
 * @returns 
 */
export const useHeadsObserver = () => {

  const observer = useRef<any>();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries: any) => {
      entries.forEach((entry: { isIntersecting: any; target: { id: SetStateAction<string>; }; }) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      })
    };

    observer.current = new IntersectionObserver(handleObserver, { rootMargin: "-20% 0% -35% 0px" })

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current.observe(elem))
    return () => observer.current?.disconnect();
  }, [])

  return { activeId }
}
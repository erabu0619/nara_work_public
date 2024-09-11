import { useEffect, useState } from "react";

/**
 * 現在の画面のURLを取得するreactHooks
 * 
 * @returns 現在の画面のURL
 */
const useGetUrl = () => {
  const [url,setUrl] = useState<string>("");
    useEffect(() => {
      setUrl(window.location.href);
    }, [])
    return url;
}

export default useGetUrl;
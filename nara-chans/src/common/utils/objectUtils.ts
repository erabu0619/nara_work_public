import { catsNumReplaceType } from "../types/constTypes"

/**
 * @param object 
 * @returns keyとvalueを入れ替えたObjectを返す
 */
export const replaceKeyAndValue = (object: object): catsNumReplaceType => {
  return Object.fromEntries(
    Object.entries(object).map(
      ([key, value]) => [value, key]
    )
  )
}
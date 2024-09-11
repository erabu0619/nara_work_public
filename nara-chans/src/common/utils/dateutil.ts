import { format, isBefore, isAfter, isEqual } from 'date-fns'
import ja from 'date-fns/locale/ja'

/**
 * Date型
 * @returns 今日の日付
 */
export const newDateTypeDate = (): Date => {
  return new Date();
}

/**
 * Date型を対象の日付へ変更する
 * @param date 
 * @param formatStr 
 * @returns 
 */
export const DateToStringFormat = (date: Date, formatStr: string): string => {
  return format(date, formatStr);
}

/**
 * 今日の日付よりも前の日付なのかをチェックする
 * @param date 
 * @returns boolean
 */
export const isDateBefore = (date: string): boolean => {
  return isBefore(new Date(date), newDateTypeDate());
}

/**
 * 今日の日付よりも後の日付なのかをチェックする
 * @param date  
 * @returns boolean
 */
export const isDateAfter = (date: string): boolean => {
  return isAfter(new Date(date), newDateTypeDate());
}

/**
 * 今日の日付と同じであるかをチェックする
 * @param date 
 * @returns 
 */
export const isDateEqual = (date: string): boolean => {
  return isEqual(new Date(date), DateToStringFormat(newDateTypeDate(), "yyyy/MM/dd"));
}

/**
 * 有効な期間であるかのチェック
 * @param startDate 
 * @param endDate 
 * @returns 
 */
export const isPeriod = (startDate: string, endDate: string) => {
  if ((isDateBefore(startDate) || isDateEqual(startDate))
    && (isDateAfter(endDate) || isDateEqual(endDate))) {
    return true;
  } else {
    return false;
  }
}

/**
 * yyyyMMddの形のstring型をyyyy年MM月dd日の形へ変換する
 * 
 * @param date 
 * @returns yyyy年MM月dd日
 */
export const toJaFormat = (date: string) => {
  let str: string = date.substring(0, 4) + "年";
  str += date.substring(4, 6) + "月";
  str += date.substring(6, 8) + "日";
  return str;
}
import { articleCategory } from '@/common/const';
import Twemoji from 'react-twemoji';

type Props = {
  articleType: string
}

/**
 * カテゴリごとに絵文字を作成する
 * @fileoverview TW絵文字用コンポーネント
 * @param param0 
 * @returns 
 */
export const ArticleTwmoji = ({articleType}:Props) => {

  const articleTypeResult = articleCategory[articleType];

  switch(articleTypeResult){
    case articleCategory.java:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>🍵</Twemoji>
    );
    case articleCategory.ts:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>🎈</Twemoji>
    );
    case articleCategory.react:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>🎆</Twemoji>
    );
    case articleCategory.sb:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>📴</Twemoji>
    );
    case articleCategory.li:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>🐧</Twemoji>
    );
    case articleCategory.nw:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>🌐</Twemoji>
    );
    case articleCategory.cplus:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>🌞</Twemoji>
    );
    case articleCategory.nj:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>⏭️</Twemoji>
    );
    case articleCategory.os:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>💻</Twemoji>
    );
    case articleCategory.book:  return (
      <Twemoji tag="span" options={{ className: 'twemoji' }}>📚</Twemoji>
    );
  }

}

import { GetStaticProps } from 'next';
import { getArticleDataMax } from '@/common/utils/serverSideMdutil';
import { articleListType } from '@/common/types/constTypes';
import styles from '@/styles/programming.module.css';
import { NextRouter, useRouter } from 'next/router';
import Articles from '@/component/Articles';
import { CreatingPages } from '@/component/CreatingPages';
import { Seohead } from '@/component/Seohead';

type Props = {
  articleList: articleListType[],
  router: NextRouter
}

/**
 * @fileoverview プログラミング記事　一覧画面
 * @param props 
 * @returns 
 */
const Programming = (props: Props) => {
  const { articleList } = props;
  const router = useRouter();

  if (0 < articleList.length) {
    return (
      <>
        <Seohead
          titleTemplate={"ホーム"}
          description={"かわいい猫の紹介と、新人プログラマーの学習記録です"}
          ogType={"website"}
        />
        <div className="main_content">
          <h2 >記事一覧</h2>
          <div className={styles.articleListMain}>
            <Articles articleList={articleList} router={router} />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Seohead
          titleTemplate={"プログラミング記事"}
          description={"かわいい猫の紹介と、新人プログラマーの学習記録です"}
          ogType={"website"}
        />
        <div className="main_content">
          <CreatingPages />
        </div>
      </>
    )
  }

}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      articleList: getArticleDataMax(),
    }
  }
}

export default Programming;
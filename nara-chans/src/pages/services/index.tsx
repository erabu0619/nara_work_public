import { CreatingPages } from "@/component/CreatingPages";
import { Seohead } from "@/component/Seohead";

/**
 * @fileoverview サービス紹介用ページ
 * @returns 
 */
const Services = () => {
  return (
    <>
      <Seohead
        titleTemplate={"各種サービス"}
        description={"駆け出しエンジニアが作成したサービスです。"}
        ogType={"website"}
      />
      <div className="main_content">
        <CreatingPages />
      </div>
    </>
  )
}

export default Services;
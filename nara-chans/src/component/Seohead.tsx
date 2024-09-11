/**
 * @fileoverview SEO対策
 */

import { MetaTypes } from "@/common/types/constTypes";
import Head from 'next/head'
import { useRouter } from "next/router";

export const Seohead = (
  { titleTemplate,
    description,
    ogType,
  }:MetaTypes) => {
    
    const router = useRouter();
    const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
    const Url = `${siteUrl}${router.asPath}`;
    const siteTitle = `ならちゃんず - ${titleTemplate}`;

    return (
      <Head>
        <meta name="viewport" content={"width=device-width, initial-scale=1"} />
        <title>{siteTitle}</title>
        <link href={Url} rel="canonical" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:url" content={Url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <link rel="icon" type="image/svg+xml" href={process.env.NEXT_PUBLIC_IMAGE_ROOT_PATH + "/profile/profile_img.png"} />
      </Head>
    );
}
export const DEFAULT_SEO = {
  title: "알티모빌리티 - 차량 종류",
  description: "알티모빌리티",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${process.env.DEPLOY_URL}/`,
    title: "알티모빌리티 - 차량 종류",
    description: "알티모빌리티",
    images: [
      {
        url: "https://logo-resources.thevc.kr/organizations/banners/9a7c9c4e83c70e4f0dedf8658a57f794552f99fd7e2ac5e276248c1e99f50343_1661690055093042.jpg",
        width: 285,
        height: 167,
        alt: "이미지",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

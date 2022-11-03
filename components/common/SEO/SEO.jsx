import { NextSeo } from "next-seo";

const SEO = ({ data }) => {
  return (
    <>
      <NextSeo
        title={`${data.attribute.brand} ${data.attribute.name}`}
        description={`월 ${data.amount.toLocaleString("ko-KR")} 원`}
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: `${process.env.DEPLOY_URL}/detail/${data.id}`,
          title: `${data.attribute.brand} ${data.attribute.name}`,
          description: `월 ${data.amount.toLocaleString("ko-KR")} 원`,
          images: [
            {
              url: data.attribute.imageUrl,
              width: 800,
              height: 400,
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default SEO;

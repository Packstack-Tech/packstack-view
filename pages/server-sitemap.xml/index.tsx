import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

interface Url {
  loc: string;
  lastmod: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urls = await fetch(`${process.env.API_URL}/api/v1/pack/public`);
  const data = await urls.json();

  const fields = data.map(({ loc, lastmod }: Url) => ({
    loc: `https://archive.packstack.io/pack/${loc}`,
    lastmod,
    changefreq: "weekly",
    priority: 0.6,
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const Sitemap = () => {};
export default Sitemap;

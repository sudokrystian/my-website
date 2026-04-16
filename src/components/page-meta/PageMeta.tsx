import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
}

const PageMeta = ({ title, description }: PageMetaProps) => (
  <Helmet>
    <title>{title} — Krystian Gołuch</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} — Krystian Gołuch`} />
    <meta property="og:description" content={description} />
  </Helmet>
);

export default PageMeta;

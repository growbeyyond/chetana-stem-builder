import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
}

const SEO = ({ 
  title = "Chetana STEM Labs - Math & Physics by Robotics",
  description = "Transform learning with Chetana STEM Labs. Teaching Math and Physics through robotics for students grades 3-10 in Hyderabad. NEP 2020 aligned curriculum with hands-on robotics education.",
  keywords = "STEM education, robotics learning, Math physics robotics, NEP 2020, Hyderabad STEM labs, school robotics programs, ATL setup, teacher training",
  image = "/hero-stem-lab.jpg",
  path = "/",
  type = "website"
}: SEOProps) => {
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}${path}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="S. Prathyusha - Chetana STEM Labs" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Chetana STEM Labs - Students learning with robotics" />
      <meta property="og:site_name" content="Chetana STEM Labs" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Chetana STEM Labs - Students learning with robotics" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#5b57ff" />
    </Helmet>
  );
};

export default SEO;
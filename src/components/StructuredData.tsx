import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "organization" | "course" | "article";
  data?: any;
}

const StructuredData = ({ type = "organization", data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case "organization":
        return {
          ...baseData,
          "@type": "Organization",
          "name": "Chetana STEM Labs",
          "description": "Teaching Math and Physics through robotics for students grades 3-10 in Hyderabad. NEP 2020 aligned curriculum with hands-on robotics education.",
          "url": window.location.origin,
          "logo": `${window.location.origin}/hero-stem-lab.jpg`,
          "foundingDate": "2019",
          "founder": {
            "@type": "Person",
            "name": "S. Prathyusha"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9705269485",
            "email": "chetanastemlabs@gmail.com",
            "contactType": "customer service"
          },
          "areaServed": "Hyderabad, Telangana, India",
          "serviceType": "STEM Education, Robotics Training, Teacher Training",
          "sameAs": [
            "mailto:chetanastemlabs@gmail.com"
          ]
        };

      case "course":
        return {
          ...baseData,
          "@type": "Course",
          "name": data?.name || "Math & Physics by Robotics",
          "description": data?.description || "Hands-on robotics curriculum teaching Math and Physics concepts for students grades 3-10",
          "provider": {
            "@type": "Organization",
            "name": "Chetana STEM Labs",
            "url": window.location.origin
          },
          "educationalLevel": "K-12",
          "teaches": ["Mathematics", "Physics", "Robotics", "Programming", "Problem Solving"],
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student"
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
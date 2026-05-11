import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const domain = import.meta.env.VITE_DOMAIN || 'https://eduardodesingner.com.br';
  const title = 'Eduardo Silva | Designer Gráfico | Especialista em Mídias Sociais';
  const description = 'Designer gráfico especializado em artes impactantes para mídias sociais e identidade visual. Transforme a presença digital da sua marca com criatividade e estratégia.';

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eduardo Silva Designer",
    "image": `${domain}/portfolio_1.jpg`,
    "@id": domain,
    "url": domain,
    "telephone": import.meta.env.VITE_WHATSAPP_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasil",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      import.meta.env.VITE_INSTAGRAM,
      import.meta.env.VITE_LINKEDIN
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Eduardo Silva" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={domain} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${domain}/portfolio_1.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={domain} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${domain}/portfolio_1.jpg`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}

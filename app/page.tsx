import EnvoraLanding from "./envora-landing";
import EnvoraSplash from "./envora-splash";
import { SITE_URL } from "./site-url";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Envora",
  alternateName: "Envora Consultoria Ambiental",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
    <EnvoraSplash><EnvoraLanding /></EnvoraSplash>
  </>;
}

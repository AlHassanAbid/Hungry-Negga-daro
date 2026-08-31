import { SITE_URL, SITE_NAME, OG_IMAGE_ABS } from "./site";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  ogType?: string;
};

/**
 * Returns the shared SEO meta + canonical link for a page.
 * Layer this on top of each route's `head()` output.
 */
export function seoMeta({ title, description, path = "/", ogType = "website" }: SeoOptions) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE_ABS },
    { property: "og:image:alt", content: SITE_NAME },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE_ABS },
  ];
}

export function seoLinks(path = "/") {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return [{ rel: "canonical", href: url }];
}

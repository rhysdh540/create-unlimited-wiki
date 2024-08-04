import { getCollection, getEntry } from "astro:content";

export default async function getIndexPageFromWiki() {
  const req = await getCollection("wiki", ({ data }) => data.isWikiIndex === true);
  return req[0];
}

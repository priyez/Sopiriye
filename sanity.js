import { createCurrentUserHook, createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: "todo" || "production",
  projectId:"ixg86tfq",
  apiVersion: "2021-03-25",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);

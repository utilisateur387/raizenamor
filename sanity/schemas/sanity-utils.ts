import { createClient, groq } from "next-sanity";
import clientConfig from "./client-config";
import { Homepage } from "@/types/types";

export async function getHomepage(): Promise<Homepage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"][0]{
      _id,
      _createdAt,
      headline,
      introParagraph,
      quote,
      headshot,
      workWithMe,
      "testimonials": testimonials,
      backgroundImage1,
      backgroundImage2,
    }`
  )
}


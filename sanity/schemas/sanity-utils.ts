import { createClient, groq } from "next-sanity";
import clientConfig from "./client-config";
import { AboutPage, General, Homepage, WorkWithMePage } from "@/types/types";

export async function getHomepage(): Promise<Homepage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"][0]{
        _id,
        _createdAt,
        headline,
        introParagraph,
        quote,
        headshot,
        "headshot": headshot {
          "url": asset->url,
          alt,
        },
        workWithMe,
        "testimonials": testimonials,
        "backgroundImage1": backgroundImage1 {
          "url": asset->url,
          alt,
        },
        "backgroundImage2": backgroundImage2 {
          "url": asset->url,
          alt,
        }
      }`
  )
}

export async function getWorkWithMePage(): Promise<WorkWithMePage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "workWithMe"][0]{
      _id,
      offerings,
      "faq": faq[]{
        question,
        answer,
        _key
      },
      "backgroundImage1": backgroundImage1 {
        "url": asset->url,
        alt,
      },
      "backgroundImage2": backgroundImage2 {
        "url": asset->url,
        alt,
      },
    }
    `
  )
}

export async function getAboutPage(): Promise<AboutPage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"][0]{
      _id,
      headline,
      content,
      "portrait": portrait {
        "url": asset->url,
        alt
      },
      certificationText,
      "certifications": certifications[]{
        title
      },
    }
    `
  )
}

export async function getGeneral(): Promise<General> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "general"][0]{
      _id,
      instagram,
      copyright,
    }`
  )
}
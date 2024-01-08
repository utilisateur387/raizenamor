import { PortableTextBlock } from "sanity";

export type Homepage = {
  _id: string;
  _createdAt: Date;
  headline: string;
  introParagraph: string;
  headshot: { url: string, alt: string };
  quote: string;
  workWithMe: string;
  testimonials: Testimonial[];
  backgroundImage1: Image;
  backgroundImage2: Image;
}

export type Testimonial = {
  _key: string;
  author: string;
  text: string;
}

export type WorkWithMePage = {
  _id: string;
  offerings: Offering[];
  faq: FaqEntry[];
  backgroundImage1: Image;
  backgroundImage2: Image;
}

export type Image = {
  url: string, 
  alt: string
}

export type Offering = {
  _key: string,
  title: string,
  duration: string,
  description: PortableTextBlock,
}

export type FaqEntry = {
  question: string,
  answer: string,
}
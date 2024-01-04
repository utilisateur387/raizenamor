export type Homepage = {
  _id: string;
  _createdAt: Date;
  headline: string;
  introParagraph: string;
  headshot: string;
  quote: string;
  workWithMe: string;
  testimonials: Testimonial[];
  backgroundImage1: string;
  backgroundImage2: string;
}

export type Testimonial = {
  _key: string;
  author: string;
  text: string;
}
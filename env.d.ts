declare namespace NodeJS {
  export interface ProcessEnv {
    // 👇 Replace with your ENV names and types
    NEXT_PUBLIC_SERVICE_ID: string;
    NEXT_PUBLIC_TEMPLATE_ID: string;
    NEXT_PUBLIC_PUBLIC_KEY: string;
  }
}
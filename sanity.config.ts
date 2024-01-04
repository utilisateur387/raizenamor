import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: 'd4v7i8j5',
  dataset: 'production',
  title: 'Raizenamor',
  apiVersion: '2024-01-04',
  basePath: '/admin',
  plugins: [
    deskTool(),
    visionTool(),
  ]
})

export default config;
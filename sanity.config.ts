import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const config = defineConfig({
  projectId: 'd4v7i8j5',
  dataset: 'production',
  title: 'Raizenamor',
  apiVersion: '2024-01-04',
  basePath: '/admin',
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([

            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Homepage")
              .id("home")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("home")
                  .documentId("home")
              ),
            S.listItem()
              .title("About")
              .id("about")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("about")
                  .documentId("about")
              ),
            S.listItem()
              .title("Work with me")
              .id("workWithMe")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("workWithMe")
                  .documentId("workWithMe")
              ),
            S.listItem()
              .title("General")
              .id("general")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("general")
                  .documentId("general")
              ),


            // orderableDocumentListDeskItem({type: 'offerings', S, context, title: 'Offerings'}),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemas }
})

export default config;
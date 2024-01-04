import about from './about.schema';
import home from './home.schema'
import workWithMe from './work-with-me.schema';

const schemas: SchemaType[] = [
  home,
  about,
  workWithMe,
];

export default schemas;

type SchemaType = {
  name: string,
  title: string,
  type: string,
  fields: any[],
}
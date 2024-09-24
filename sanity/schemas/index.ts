import about from './about.schema';
import home from './home.schema'
import workWithMe from './work-with-me.schema';
import general from './general.schema';

const schemas: SchemaType[] = [
  home,
  about,
  workWithMe,
  general,
];

export default schemas;

type SchemaType = {
  name: string,
  title: string,
  type: string,
  fields: any[],
}
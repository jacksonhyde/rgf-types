import * as Flow from './RgfFlow';
import * as Field from './RgfField';
import * as Page from './RgfPage';

export interface Config {
  name: string;
  header: {
    navLinks: string[];
  };
  footer: {
    metaLinks: string[];
  };
  fieldGroups: string[];
  flows: Flow.Config[];
  fields: {
    [key: string]: Field.Config;
  };
  pages: {
    [key: string]: Page.Config;
  };
}

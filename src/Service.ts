import * as Flow from './Flow';
import * as Field from './Field';
import * as Page from './Page';

export class Config {
  name = '';
  header: {
    navLinks: string[];
  } = {navLinks: []};
  footer: {
    metaLinks: string[];
  } = {metaLinks: []};
  fieldGroups: string[] = [];
  flows: Flow.Config[] = [];
  fields: {
    [key: string]: Field.Config;
  } = {};
  pages: {
    [key: string]: Page.Config;
  } = {};
}

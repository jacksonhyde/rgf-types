import * as Flow from './RgfFlow';
import * as Field from './RgfField';
import * as Page from './RgfPage';

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

import { RgfFlow, RgfField, RgfPage } from ".";


export namespace RgfService {

  export interface Config {
    name: string;
    header: {
      navLinks: string[];
    },
    footer: {
      metaLinks: string[];
    },
    fieldGroups: string[];
    flows: RgfFlow.Config[];
    fields: {
      [key: string]: RgfField.Config;
    },
    pages: {
      [key: string]: RgfPage.Config;
    }
  }
}
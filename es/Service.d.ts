import * as Flow from './Flow';
import * as Field from './Field';
import * as Page from './Page';
export declare class Config {
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

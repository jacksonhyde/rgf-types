import { Flow } from './RgfFlow';
import { Field } from './RgfField';
import { Page } from './RgfPage';
export declare namespace Service {
    interface Config {
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
}

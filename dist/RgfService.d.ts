import * as RgfFlow from './RgfFlow';
import * as RgfField from './RgfField';
import * as RgfPage from './RgfPage';
export declare namespace RgfService {
    interface Config {
        name: string;
        header: {
            navLinks: string[];
        };
        footer: {
            metaLinks: string[];
        };
        fieldGroups: string[];
        flows: RgfFlow.Config[];
        fields: {
            [key: string]: RgfField.Config;
        };
        pages: {
            [key: string]: RgfPage.Config;
        };
    }
}

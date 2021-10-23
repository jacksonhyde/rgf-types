import * as Field from './Field';
export declare class Config {
    fields: string[];
    next: [
        {
            path: string;
            fields: {};
            values: {};
        }
    ];
}
export declare class State {
    submitted: boolean;
    errors: {
        count: number;
        all?: Field.Error[];
    };
}

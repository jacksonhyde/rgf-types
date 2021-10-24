export declare class Config {
    type: string;
    group: string;
    format?: string;
    options?: string[];
}
export declare class Error {
    key: string;
    constructor(key: string);
}
export declare class State {
    value: {
        [key: string]: string;
    };
    formatted?: string;
    errors: Error[];
    group: string;
    step: string;
}

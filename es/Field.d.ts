export declare class Config {
    type: string;
    field: string;
    group?: string | undefined;
    format?: string;
    options?: string[];
}
export declare class Error {
    key: string;
    constructor(key: string);
}
export declare class State {
    data: {
        [key: string]: string;
    };
    value: string;
    formatted?: string;
    errors: Error[];
    group: string;
    step: string;
}

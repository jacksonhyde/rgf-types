export declare class Config {
    [key: string]: string;
}
export declare class Error {
    field: string;
    key: string;
    constructor(field: string, key: string);
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

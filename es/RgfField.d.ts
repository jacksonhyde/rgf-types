export declare class Config {
    type: string;
    group: string;
    format?: string;
    options?: string[];
}
export declare class Error {
    message: string;
}
export declare class State {
    value: {
        [key: string]: string;
    };
    formatted?: string;
    errors: Error[];
    group: string;
}

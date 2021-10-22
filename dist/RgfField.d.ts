export declare namespace RgfField {
    interface Config {
        type: string;
        group: string;
        format?: string;
        options?: string[];
    }
    interface Error {
        message: string;
    }
    interface State {
        value: {
            [key: string]: string;
        };
        formatted?: string;
        errors: Error[];
    }
}

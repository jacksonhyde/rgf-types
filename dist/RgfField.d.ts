export declare namespace Field {
    interface Config {
        type: string;
        group: string;
        format?: string;
        options?: string[];
    }
    interface Error {
        message: string;
    }
    class State {
        value: {
            [key: string]: string;
        };
        formatted?: string;
        errors: Error[];
    }
}

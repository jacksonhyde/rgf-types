import * as Step from './Step';
export declare class Config {
    path: string;
    entry: string;
    steps: {
        [key: string]: Step.Config;
    };
}
export declare class State {
    status: {
        submitted: boolean;
        id: string;
    };
    current: string;
    history: string[];
    steps: {
        [key: string]: Step.State;
    };
}

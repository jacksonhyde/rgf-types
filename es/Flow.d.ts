import * as Step from './Step';
export declare class Config {
    path: string;
    entry: string;
    steps: {
        [key: string]: Step.Config;
    };
}
export declare class State {
    current: string;
    history: string[];
    steps: {
        [key: string]: Step.State;
    };
}

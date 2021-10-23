import * as Step from './Step';
export declare class Config {
    path: string;
    start: string;
    steps: Step.Config[];
}
export declare class State {
    current: string;
    history: string[];
    steps: {
        [key: string]: string;
    };
}

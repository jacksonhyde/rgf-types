import * as Step from './RgfStep';
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

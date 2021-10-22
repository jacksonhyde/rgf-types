import { RgfStep } from ".";
export declare namespace RgfFlow {
    interface Config {
        path: string;
        start: string;
        steps: RgfStep.Config[];
    }
    interface State {
        current: string;
        history: string[];
        steps: {
            [key: string]: RgfStep.State;
        };
    }
}

import { Step } from "./RgfStep";
export declare namespace Flow {
    interface Config {
        path: string;
        start: string;
        steps: Step.Config[];
    }
    interface State {
        current: string;
        history: string[];
        steps: {
            [key: string]: Step.State;
        };
    }
}

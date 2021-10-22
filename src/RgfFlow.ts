import {Step} from "./RgfStep";

export namespace Flow {

  export interface Config {
    path: string;
    start: string;
    steps: Step.Config[];
  }

  export interface State {
    current: string;
    history: string[];
    steps: {
      [key: string]: Step.State
    }
  }
}
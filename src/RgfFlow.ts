import { RgfStep } from ".";

export namespace RgfFlow {

  export interface Config {
    path: string;
    start: string;
    steps: RgfStep.Config[];
  }

  export interface State {
    current: string;
    history: string[];
    steps: {
      [key: string]: RgfStep.State
    }
  }
}
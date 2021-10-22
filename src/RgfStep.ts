import {Field} from "./RgfField";

export namespace Step {

  export interface Config {
    fields: string[];
    next: [
      {
        path: string;
        field: string;
        values: string[];
      }
    ];
  }

  export interface State {
    submitted: boolean;
    errors: {
      count: number;
      all?: Field.Error[];
    };
  }
}
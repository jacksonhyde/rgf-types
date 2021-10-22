import { RgfField } from ".";

export namespace RgfStep {

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
      all?: RgfField.Error[];
    };
  }
}
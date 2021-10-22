export namespace Field {

  export interface Config {
    type: string;
    group: string;
    format?: string;
    options?: string[];
  }

  export interface Error {
    message: string;
  }

  export class State {
    value: {
      [key: string]: string;
    } = {};
    formatted?: string = '';
    errors: Error[] = [];
  }
  
}
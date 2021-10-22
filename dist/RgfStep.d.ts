import { RgfField } from ".";
export declare namespace RgfStep {
    interface Config {
        fields: string[];
        next: [
            {
                path: string;
                field: string;
                values: string[];
            }
        ];
    }
    interface State {
        submitted: boolean;
        errors: {
            count: number;
            all?: RgfField.Error[];
        };
    }
}

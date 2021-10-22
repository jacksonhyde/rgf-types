import { Field } from "./RgfField";
export declare namespace Step {
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
            all?: Field.Error[];
        };
    }
}

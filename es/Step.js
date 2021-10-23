"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Config = void 0;
class Config {
    constructor() {
        this.fields = [];
        this.next = [
            {
                path: '',
                fields: {},
                values: {},
            },
        ];
    }
}
exports.Config = Config;
class State {
    constructor() {
        this.submitted = false;
        this.errors = { count: 0 };
    }
}
exports.State = State;
//# sourceMappingURL=Step.js.map
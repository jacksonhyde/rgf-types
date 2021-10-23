"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Config = void 0;
class Config {
    constructor() {
        this.fields = [];
        this.next = [
            {
                path: '',
            },
        ];
    }
}
exports.Config = Config;
class State {
    constructor() {
        this.submitted = false;
        this.errors = { count: 0 };
        this.fields = {};
    }
}
exports.State = State;
//# sourceMappingURL=Step.js.map
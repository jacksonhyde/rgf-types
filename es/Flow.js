"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Config = void 0;
class Config {
    constructor() {
        this.path = '';
        this.entry = '';
        this.steps = {};
    }
}
exports.Config = Config;
class State {
    constructor() {
        this.status = {
            submitted: false,
            id: '',
        };
        this.current = '';
        this.history = [];
        this.steps = {};
    }
}
exports.State = State;
//# sourceMappingURL=Flow.js.map
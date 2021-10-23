"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Config = void 0;
class Config {
    constructor() {
        this.path = '';
        this.start = '';
        this.steps = [];
    }
}
exports.Config = Config;
class State {
    constructor() {
        this.current = '';
        this.history = [];
        this.steps = {};
    }
}
exports.State = State;
//# sourceMappingURL=RgfFlow.js.map
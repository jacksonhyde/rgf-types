"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Error = exports.Config = void 0;
class Config {
    constructor() {
        this.type = '';
        this.group = '';
    }
}
exports.Config = Config;
class Error {
    constructor(key) {
        this.key = '';
        this.key = key;
    }
}
exports.Error = Error;
class State {
    constructor() {
        this.value = {};
        this.formatted = '';
        this.errors = [];
        this.group = '';
        this.step = '';
    }
}
exports.State = State;
//# sourceMappingURL=Field.js.map
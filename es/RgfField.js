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
    constructor() {
        this.message = '';
    }
}
exports.Error = Error;
class State {
    constructor() {
        this.value = {};
        this.formatted = '';
        this.errors = [];
        this.group = '';
    }
}
exports.State = State;
//# sourceMappingURL=RgfField.js.map
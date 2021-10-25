"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Error = exports.Config = void 0;
class Config {
    constructor() {
        this.type = '';
        this.field = '';
        this.group = '';
    }
}
exports.Config = Config;
class Error {
    constructor(field, key) {
        this.field = '';
        this.key = '';
        this.field = field;
        this.key = key;
    }
}
exports.Error = Error;
class State {
    constructor() {
        this.data = {};
        this.value = '';
        this.formatted = '';
        this.errors = [];
        this.group = '';
        this.step = '';
    }
}
exports.State = State;
//# sourceMappingURL=Field.js.map
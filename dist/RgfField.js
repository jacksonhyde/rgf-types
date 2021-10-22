"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgfField = void 0;
var RgfField;
(function (RgfField) {
    var State = /** @class */ (function () {
        function State() {
            this.value = {};
            this.formatted = '';
            this.errors = [];
        }
        return State;
    }());
    RgfField.State = State;
})(RgfField = exports.RgfField || (exports.RgfField = {}));

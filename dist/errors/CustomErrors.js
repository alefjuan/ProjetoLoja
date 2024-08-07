"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomErrors extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomErrors";
    }
}
exports.default = CustomErrors;

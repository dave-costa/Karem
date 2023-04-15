"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
class Subscriber {
    constructor(stateObj) {
        this.stateObj = stateObj;
    }
    update() {
        this.stateObj.getValue();
    }
}
exports.Subscriber = Subscriber;

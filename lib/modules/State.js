"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const Observer_1 = require("./Observer");
class State {
    constructor(value) {
        this.value = value;
        this.observer = new Observer_1.Observer();
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
        this.observer.notify();
    }
    subscribe(subscriber) {
        this.observer.subscribe(subscriber);
    }
    unsubscribe(subscriber) {
        this.observer.unsubscribe(subscriber);
    }
}
exports.State = State;

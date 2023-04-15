"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(states, actions) {
        this.states = states;
        this.actions = actions;
    }
    getState(name) {
        let keys = Object.keys(this.states);
        let findKey = keys.find((key) => key === name);
        return this.states[findKey];
    }
    getActions(name) {
        let keys = Object.keys(this.actions);
        let findKey = keys.find((key) => key === name);
        return this.actions[findKey];
    }
    setState(name, value) {
        let keys = Object.keys(this.states);
        let findKey = keys.find((key) => key === name);
        this.states[findKey].setValue(value);
    }
}
exports.Store = Store;

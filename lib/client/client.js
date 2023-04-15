"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientStore = void 0;
const Store_1 = require("../modules/Store");
function clientStore(property) {
    return new Store_1.Store(property.states, property.actions);
}
exports.clientStore = clientStore;

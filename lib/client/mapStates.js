"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStates = void 0;
const Subscriber_1 = require("../modules/Subscriber");
function mapStates(store, states) {
    const statesReturn = {};
    const subscriberCache = {};
    states.forEach((state) => {
        const stateObj = store.getState(state);
        if (!subscriberCache[state]) {
            subscriberCache[state] = new Subscriber_1.Subscriber(stateObj);
            stateObj.subscribe(subscriberCache[state]);
        }
        Object.defineProperty(statesReturn, state, {
            get() {
                return store.getState(state).getValue();
            },
        });
    });
    return statesReturn;
}
exports.mapStates = mapStates;

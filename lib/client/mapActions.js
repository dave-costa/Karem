"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapActions = void 0;
function mapActions(store, actions) {
    const actionsReturn = {};
    actions.forEach((action) => {
        actionsReturn[action] = store.getActions(action);
    });
    return actionsReturn;
}
exports.mapActions = mapActions;

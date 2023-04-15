"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client/client");
const mapActions_1 = require("./client/mapActions");
const mapStates_1 = require("./client/mapStates");
const State_1 = require("./modules/State");
const myStore = (0, client_1.clientStore)({
    states: {
        age: new State_1.State("10"),
    },
    actions: {
        mudarAge() {
            myStore.setState("age", "20");
        },
    },
});
const stateValues = (0, mapStates_1.mapStates)(myStore, ["age"]);
console.log("antes " + stateValues.age);
const { mudarAge } = (0, mapActions_1.mapActions)(myStore, ["mudarAge"]);
mudarAge();
console.log("depois " + stateValues);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
class Observer {
    constructor() {
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    unsubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }
    notify() {
        this.subscribers.forEach((subscriber) => {
            subscriber.update();
        });
    }
}
exports.Observer = Observer;

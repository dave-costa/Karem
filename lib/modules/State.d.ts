import { Observer } from "./Observer";
import { Subscriber } from "./Subscriber";
export declare class State {
    value: any;
    observer: Observer;
    constructor(value: any);
    getValue(): any;
    setValue(value: any): void;
    subscribe(subscriber: Subscriber): void;
    unsubscribe(subscriber: Subscriber): void;
}

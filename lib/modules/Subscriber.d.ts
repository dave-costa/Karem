import { State } from "./State";
export declare class Subscriber {
    stateObj: State;
    constructor(stateObj: State);
    update(): void;
}

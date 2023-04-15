export declare class Store {
    private states;
    private actions;
    constructor(states: any, actions: any);
    getState(name: string): any;
    getActions(name: string): any;
    setState(name: string, value: any): void;
}

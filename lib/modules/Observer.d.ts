export declare class Observer {
    subscribers: any[];
    subscribe(subscriber: any): void;
    unsubscribe(subscriber: any): void;
    notify(): void;
}

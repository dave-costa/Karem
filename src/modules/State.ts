import { Observer } from "./Observer"
import { Subscriber } from "./Subscriber"

export class State {
  value: any
  observer: Observer

  constructor(value: any) {
    this.value = value
    this.observer = new Observer()
  }

  getValue() {
    return this.value
  }

  setValue(value: any) {
    this.value = value
    this.observer.notify()
  }

  subscribe(subscriber: Subscriber) {
    this.observer.subscribe(subscriber)
  }

  unsubscribe(subscriber: Subscriber) {
    this.observer.unsubscribe(subscriber)
  }
}

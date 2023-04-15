export class Observer {
  subscribers: any[] = []

  subscribe(subscriber: any) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber: any) {
    const index = this.subscribers.indexOf(subscriber)
    if (index > -1) {
      this.subscribers.splice(index, 1)
    }
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber.update()
    })
  }
}

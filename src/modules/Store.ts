export class Store {
  constructor(private states: any, private actions: any) {}

  getState(name: string) {
    let keys = Object.keys(this.states)
    let findKey = keys.find((key) => key === name) as string
    return this.states[findKey]
  }

  getActions(name: string) {
    let keys = Object.keys(this.actions)
    let findKey = keys.find((key) => key === name) as string
    return this.actions[findKey]
  }

  setState(name: string, value: any) {
    let keys = Object.keys(this.states)
    let findKey = keys.find((key) => key === name) as string
    this.states[findKey].setValue(value)
  }
}

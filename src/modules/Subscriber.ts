import { State } from "./State"

export class Subscriber {
  stateObj: State

  constructor(stateObj: State) {
    this.stateObj = stateObj
  }

  update() {
    this.stateObj.getValue()
  }
}

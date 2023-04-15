import { Subscriber } from "../modules/Subscriber"

export function mapStates(store: any, states: string[]): any {
  const statesReturn: any = {} as any
  const subscriberCache = {} as any

  states.forEach((state) => {
    const stateObj: any = store.getState(state) as any

    if (!subscriberCache[state]) {
      subscriberCache[state] = new Subscriber(stateObj) as any
      stateObj.subscribe(subscriberCache[state] as any)
    }

    Object.defineProperty(statesReturn, state, {
      get() {
        return store.getState(state).getValue()
      },
    })
  })

  return statesReturn
}

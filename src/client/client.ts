import { Store } from "../modules/Store"

export function clientStore(property: any) {
  return new Store(property.states, property.actions)
}

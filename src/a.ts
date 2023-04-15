import { clientStore } from "./client/client"
import { mapActions } from "./client/mapActions"
import { mapStates } from "./client/mapStates"
import { State } from "./modules/State"

const myStore = clientStore({
  states: {
    age: new State("10"),
  },
  actions: {
    mudarAge() {
      myStore.setState("age", "20")
    },
  },
})

const stateValues = mapStates(myStore, ["age"])
console.log("antes " + stateValues.age)
const { mudarAge } = mapActions(myStore, ["mudarAge"])
mudarAge()
console.log("depois " + stateValues)

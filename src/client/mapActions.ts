export function mapActions(store: any, actions: string[]): any {
  const actionsReturn = {} as any
  actions.forEach((action) => {
    actionsReturn[action] = store.getActions(action)
  })
  return actionsReturn
}

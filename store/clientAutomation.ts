import { Module, VuexModule, Mutation } from "vuex-module-decorators"
import { ClientAutomation } from "~/types/types"

@Module({ namespaced: true, stateFactory: true })
export default class ClientAutomations extends VuexModule {
  private automations: ClientAutomation[] = []

  @Mutation
  setClients(automations: ClientAutomation[]) {
    this.automations = automations
  }

  get getClients(): ClientAutomation[] {
    return this.automations
  }
}

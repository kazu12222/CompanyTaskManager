import { Module, VuexModule, Mutation } from "vuex-module-decorators"
import { Client } from "~/types/types"

@Module({ namespaced: true, stateFactory: true })
export default class Clients extends VuexModule {
  private clients: Client[] = []

  @Mutation
  setClients(clients: Client[]) {
    this.clients = clients
  }

  get getClients(): Client[] {
    return this.clients
  }
}

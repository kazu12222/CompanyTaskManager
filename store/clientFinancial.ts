import { Module, VuexModule, Mutation } from "vuex-module-decorators"
import { ClientFinancial } from "~/types/types"

@Module({ namespaced: true, stateFactory: true })
export default class ClientFinancials extends VuexModule {
  private financials: ClientFinancial[] = []

  @Mutation
  setFinancials(financials: ClientFinancial[]) {
    this.financials = financials
  }

  get getFinancial(): ClientFinancial[] {
    return this.financials
  }
}

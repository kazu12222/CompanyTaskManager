import { Module, VuexModule, Mutation } from "vuex-module-decorators"
import { Task } from "~/types/types"

@Module({ namespaced: true, stateFactory: true })
export default class Tasks extends VuexModule {
  private tasks: Task[] = []

  @Mutation
  settasks(tasks: Task[]) {
    this.tasks = tasks
  }

  get getFinancial(): Task[] {
    return this.tasks
  }
}

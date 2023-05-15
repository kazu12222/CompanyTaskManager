import { Mutation, VuexModule, Module } from "vuex-module-decorators"
import { Company, List } from "~/types/types"

@Module({ namespaced: true, stateFactory: true })
export default class Companies extends VuexModule {
  private companies: Company[] = [
    {
      companyId: 1,
      name: "会社1",
      industry: "IT",
      feature: "A",
      president: "山田太郎",
      memo: "",
      state: "client",
    },
    {
      companyId: 2,
      name: "会社2",
      industry: "IT",
      feature: "A",
      president: "山田太郎",
      memo: "",
      state: "approach",
    },
    {
      companyId: 3,
      name: "会社3",
      industry: "IT",
      feature: "A",
      president: "山田太郎",
      memo: "",
      state: "candidate",
    },
  ]

  @Mutation
  setCompanies(companies: Company[]) {
    this.companies = companies
  }

  @Mutation
  addCompany(company: Company) {
    this.companies.push(company)
  }
  get getCompanies(): Company[] {
    return this.companies
  }
}

//...mapMutationsの場合は、以下のように記述する
// import { mapMutations } from "vuex"
// mapMutations(モジュール名, [ミューテーション名])
// 例: mapMutations("company", ["setCompanies", "addCompany"])
//companyはstore配下のcompany.tsのcompany部分
//またnuxt-property-decoratorを使う場合は明示的に@moduleをつける必要がある

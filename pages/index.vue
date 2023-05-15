<template>
  <div>
    <h1>Trello風アプリ</h1>
    <AddCard />
    <div class="flex">
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
      <ListView :list="list1" class="flex-auto" />
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
      <ListView :list="list2" class="flex-auto" />
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
      <ListView :list="list3" class="flex-auto" />
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex"
import { Component, Vue } from "nuxt-property-decorator"
import ListView from "~/components/List.vue"
import AddCard from "~/components/AddCard.vue"
import { Company, List } from "~/types/types"

@Component({
  components: {
    ListView,
    AddCard,
  },
  ...mapMutations("company", ["addCompany"]),
})
export default class HomePage extends Vue {
  public companies: Company[] = this.$store.getters["company/getCompanies"]
  public list1: List = {
    name: "顧客",
    cards: [],
    status: "client",
  }

  public list2: List = {
    name: "営業中",
    cards: [],
    status: "approach",
  }

  public list3: List = {
    name: "候補",
    cards: [],
    status: "candidate",
  }
  getCompanies() {
    this.list1.cards = this.companies.filter(
      (company) => company.state === "client"
    )
    this.list2.cards = this.companies.filter(
      (company) => company.state === "approach"
    )
    this.list3.cards = this.companies.filter(
      (company) => company.state === "candidate"
    )
  }
}
</script>

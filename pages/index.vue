<template>
  <div>
    <h1>Trello風アプリ</h1>
    <AddCard />
    <div class="flex">
      <div class="flex-auto"></div>
      <list-view :list="list1" class="flex-auto" />
      <div class="flex-auto"></div>
      <list-view :list="list2" class="flex-auto" />
      <div class="flex-auto"></div>
      <list-view :list="list3" class="flex-auto" />
      <div class="flex-auto"></div>
      <div>{{ list1 }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import ListView from "~/components/List.vue"
import AddCard from "~/components/AddCard.vue"
import { Company, List } from "~/types/types"

export default {
  components: {
    ListView,
    AddCard,
  },
  data() {
    return {
      companies: [],
    }
  },
  computed: {
    list1() {
      return {
        name: "顧客",
        cards: this.companies.filter((company) => company.state === "client"),
        status: "client",
      }
    },
    list2() {
      return {
        name: "営業中",
        cards: this.companies.filter((company) => company.state === "approach"),
        status: "approach",
      }
    },
    list3() {
      return {
        name: "候補",
        cards: this.companies.filter(
          (company) => company.state === "candidate"
        ),
        status: "candidate",
      }
    },
  },
  created() {
    this.companies = this.$store.getters["company/getCompanies"]
  },
}
</script>

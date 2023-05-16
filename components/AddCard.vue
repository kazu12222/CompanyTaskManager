<template>
  <button
    class="border border-gray-300 rounded-lg shadow-lg p-4"
    @click="addEmptyCard"
  >
    Add Card
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class AddCard extends Vue {
  addEmptyCard() {
    this.$store.commit("company/addCompany", {
      companyId: 0,
      name: "会社名",
      industry: "A",
      feature: "A",
      president: "A",
      memo: "A",
      state: "candidate",
    })
  }
}
</script>

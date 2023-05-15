<template>
  <button
    class="border border-gray-300 rounded-lg shadow-lg p-4"
    @click="addEmptyCard"
  >
    Add Card
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component
export default class AddCard extends Vue {
  addEmptyCard() {
    this.$store.commit("company/addCompany", {
      companyId: 0,
      name: "",
      industry: "",
      feature: "",
      president: "",
      memo: "",
      state: "",
    })
  }
}
</script>

<template>
  <div class="border border-gray-300 rounded-lg shadow-lg p-4">
    {{ card.name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component
export default class Card extends Vue {
  @Prop() card!: { name: string }
}
</script>

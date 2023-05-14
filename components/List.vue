<template>
  <div>
    <h2>{{ list.name }}</h2>
    <draggable v-model="list.cards" group="cards" @end="updateStatus">
      <div v-for="(card, index) in list.cards" :key="index">
        <Card :card="card" />
      </div>
    </draggable>
    <!-- <addCardForm @addCard="addCardAction" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import Card from "~/components/Card.vue"
import draggable from "vuedraggable"

@Component({
  components: {
    Card,
    draggable,
  },
})
export default class List extends Vue {
  @Prop() list!: { name: string; cards: { name: string }[]; status: string }
}
</script>

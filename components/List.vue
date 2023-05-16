<template>
  <div>
    <h2>{{ list.name }}</h2>
    <draggable v-model="list.cards" group="cards" @end="changeStore">
      <div
        v-for="(card, index) in list.cards"
        :key="index"
        @click="showDetailsModal(card)"
      >
        <Card :card="card" />
      </div>
    </draggable>
    <!-- <addCardForm @addCard="addCardAction" /> -->
    <div
      v-if="showModal"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="showModal = false"
        ></div>

        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              {{ selectedItem.name }}
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                {{ selectedItem.name }}
              </p>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="showModal = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import Card from "~/components/Card.vue"
import draggable from "vuedraggable"
import { Company, List } from "~/types/types"

@Component({
  components: {
    Card,
    draggable,
  },
})
export default class ListView extends Vue {
  @Prop() list!: List
  private selectedCard: Company = {} as Company
  private showModal: boolean = false
  showDetailsModal(card: Company) {
    this.selectedCard = card
    this.showModal = true
  }
  changeStore(event: any) {
    console.log(event)
    console.log(this.list)
    this.selectedCard = this.list.cards[event.oldIndex]
    // this.selectedCard.state = this.list.status
    console.log(this.selectedCard)
  }
}
</script>

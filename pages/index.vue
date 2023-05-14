<template>
  <div>
    <h1>Trello風アプリ</h1>
    <div class="flex">
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
      <List :list="list1" class="flex-auto" />
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
      <List :list="list2" class="flex-auto" />
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
      <List :list="list3" class="flex-auto" />
      <div class="flex-auto"></div>
      <!-- 空白の要素 -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import List from "~/components/List.vue"
// import AddListForm from "~/components/AddListForm.vue"

@Component({
  components: {
    List,
    // AddListForm,
  },
})
export default class HomePage extends Vue {
  data(): {
    list1: {
      name: string
      cards: { name: string }[]
      status: string
    }
    list2: {
      name: string
      cards: { name: string }[]
      status: string
    }
    list3: {
      name: string
      cards: { name: string }[]
      status: string
    }
  } {
    return {
      list1: {
        name: "TODO",
        cards: [
          { name: "タスク1" },
          { name: "タスク2" },
          { name: "タスク3" },
          { name: "タスク4" },
        ],
        status: "todo",
      },
      list2: {
        name: "DOING",
        cards: [
          { name: "タスク1" },
          { name: "タスク2" },
          { name: "タスク3" },
          { name: "タスク4" },
        ],
        status: "todo",
      },
      list3: {
        name: "DONE",
        cards: [
          { name: "タスク1" },
          { name: "タスク2" },
          { name: "タスク3" },
          { name: "タスク4" },
        ],
        status: "todo",
      },
    }
  }
  // get lists() {
  //   return this.$store.state.lists
  // }

  addListAction(name: string) {
    if (name) {
      this.$store.commit("addList", { name })
    }
  }
}
</script>

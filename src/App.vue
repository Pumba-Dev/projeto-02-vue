<template>
  <main class="main-container">
    <names-table />
    <user-panel />
  </main>
</template>

<script>
import NamesTable from "./components/NamesTable.vue";
import UserPanel from "./components/UserPanel.vue";

export default {
  components: {
    NamesTable,
    UserPanel,
  },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: space-around;
}
</style>
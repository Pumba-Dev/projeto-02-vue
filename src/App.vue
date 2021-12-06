<template>
  <main class="main-container">
    <names-table :users="users" :userHasSelected="userHasSelected" />
    <user-panel :currentUser="currentUser" />
  </main>
</template>

<script>
import NamesTable from "./components/NamesTable.vue";
import UserPanel from "./components/UserPanel.vue";
import usersMock from "@/mock/usersMock.js";

export default {
  data: function () {
    return {
      users: usersMock,
      currentUser: {},
    };
  },
  components: {
    NamesTable,
    UserPanel,
  },
  methods: {
    userHasSelected(cUser) {
      this.currentUser = cUser;
      // console.log(this.currentUser);
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: space-around;
}
</style>
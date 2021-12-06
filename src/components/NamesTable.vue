<template>
  <table class="user-table">
    <tr>
      <th><strong>#ID</strong></th>
      <th><strong>Name</strong></th>
    </tr>
    <tr v-for="user in users" :key="user.id" @click="userHasSelected(user)">
      <td>{{ user.id }}</td>
      <td>{{ user.userName }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
    userHasSelected: Function,
  },
};
</script>

<style>
.user-table {
}
</style>
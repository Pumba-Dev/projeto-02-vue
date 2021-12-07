<template>
  <v-app>
    <v-simple-table class="simple-table">
      <thead>
        <tr>
          <th class="center-align">#ID</th>
          <th class="center-align">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" @click="setCurrentUser(user)">
          <td>{{ user.id }}</td>
          <td>{{ user.userName }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-app>
</template>

<script>
import usersMock from "@/mock/usersMock.js";
import UserBus from "./CurrentClickedUserBus";
export default {
  data() {
    return {
      users: usersMock,
    };
  },
  methods: {
    setCurrentUser(cUser) {
      UserBus.setCurrentUser(cUser);
    },
  },
};
</script>

<style>
.simple-table {
  width: 40vw;
}
</style>
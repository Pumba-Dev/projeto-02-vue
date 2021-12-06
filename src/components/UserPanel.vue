<template>
  <div class="box-container">
    <h1 v-if="Object.keys(this.currentUser).length === 0">
      No User Selected!!
    </h1>
    <template v-else>
      <h1>ID: {{ currentUser.id }}</h1>
      <h1>Name: {{ currentUser.userName }}</h1>
      <h1>Age: {{ currentUser.age }}</h1>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
};

// console.log(this.currentUser);
</script>

<style>
.box-container {
  border: 1px solid grey;
  padding: 20px;
  min-width: 30%;
}
</style>
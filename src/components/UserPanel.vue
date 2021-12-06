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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid grey;
  padding: 20px;
  box-sizing: border-box;
  height: 30vw;
  width: 30vw;
}
</style>
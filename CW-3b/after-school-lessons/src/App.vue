<template>
  <div id="app">
    <header v-if="this.cart.length > 0">
      <button class="action-button">({{ this.cart.length }}) Checkout</button>
    </header>

    <LessonList @addToCart="add" />
  </div>
</template>

<script>
import LessonList from "./components/LessonList.vue";

export default {
  name: "App",
  components: {
    LessonList,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    add(lesson) {
      console.log("getting here!");
      this.cart.push(lesson);
    },
  },
};
</script>

<style>
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 0;
  margin: 0;
}

header {
  display: flex;
  padding: 15px 0;
  background: lightblue;
}

.action-button {
  color: white;
  background-color: brown;
  outline: none;
  border: none;
  margin-right: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 8px 25px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 6px;
  margin-left: auto;
}

.action-button:hover {
  cursor: pointer;
}
</style>

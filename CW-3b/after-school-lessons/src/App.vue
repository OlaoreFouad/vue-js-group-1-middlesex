<template>
  <div id="app">
    <header v-if="this.cart.length > 0">
      <button class="action-button" v-on:click="showCheckOut">
        ({{ itemsInCart }}) Checkout
      </button>
    </header>
    <div v-if="showProduct">
      <LessonList :lessons="lessons" @addToCart="add" />
    </div>
    <div v-else>
      <CheckOut :cart="cart" @remove="removeLessonIndex" />
    </div>
  </div>
</template>

<script>
import LessonList from "./components/LessonList.vue";
import CheckOut from "./components/Checkout.vue";

export default {
  name: "App",
  components: {
    LessonList,
    CheckOut,
  },
  data() {
    return {
      cart: [],
      showProduct: true,
      lessons: [],
    };
  },
  methods: {
    showCheckOut() {
      this.showProduct = this.showProduct ? false : true;
    },
    add(lesson) {
      const existingLessonIndex = this.cart.findIndex(
        (_lesson) => lesson.id == _lesson.id
      );
      if (existingLessonIndex != -1) {
        this.cart[existingLessonIndex].spaces =
          this.cart[existingLessonIndex].spaces + 1;
      } else {
        let newLesson = {};
        Object.assign(newLesson, lesson);
        newLesson.spaces = 1;
        this.cart.push(newLesson);
      }
    },
    removeLessonIndex(index) {
      this.cart.splice(index, 1);
    },
  },
  computed: {
    itemsInCart: function() {
      let count = 0;
      this.cart.forEach((item) => {
        count += item.spaces;
      });
      return count;
    },
  },
  created: function() {
    fetch("http://localhost:3000/lessons")
      .then((response) => {
        return response.json();
      })
      .then((_lessons) => {
        this.lessons = _lessons;
      });
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

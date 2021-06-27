<template>
  <div id="app">
       <header v-if="this.cart.length > 0">
         <button class="action-button" v-on:click="showCheckOut">({{ this.cart.length }}) Checkout</button>
    </header>
    <div v-if="showProduct">
    <LessonList @addToCart="add" />
    </div>
    <div v-else>
       <CheckOut :cart="cart" @remove="removeLessonIndex" />
       </div>
  </div>
</template>

<script>
import LessonList from "./components/LessonList.vue";
import CheckOut from "./components/Checkout.vue"

export default {
  name: "App",
  components: {
    LessonList,
    CheckOut
  },
  data() {
    return {
      cart: [],
      showProduct: true,
    };
  },
  methods: {
    showCheckOut(){
      this.showProduct = this.showProduct ? false : true;
    },
    add(lesson) {
      console.log("getting here!");
      this.cart.push(lesson);
    },
    removeLessonIndex(index){
      this.cart.splice(index,1);
    }
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

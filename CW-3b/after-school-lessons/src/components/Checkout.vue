<template>
  <div>
    <h2>Checkout</h2>
    <div class="lessons">
      <ul class="lesson" v-for="lesson in cart" :key="lesson.id">
        <li>Topic: {{ lesson.topic }}</li>
        <li>Location: {{ lesson.location }}</li>
        <li>Price: ${{ lesson.price }}</li>
        <li>Spaces: {{ lesson.spaces }}</li>
        <div class="text-center">
        <button @click="removeLesson(index)">remove</button>
        </div>
      </ul>
    </div>
    <p>
      <strong>Name </strong>
      <input v-model="name" />
      <strong> Address </strong>
      <input v-model="address" /> <button>Submit</button>
    </p>
  </div>
</template>
<script>

export default {
  name: "CheckOut",
  props: ['cart'],
  data() {
    return {
      name: "",
      address: "",
    };
  },
  methods:{
      removeLesson(index){
          this.$emit('remove', index);
      }
  }
};
</script>
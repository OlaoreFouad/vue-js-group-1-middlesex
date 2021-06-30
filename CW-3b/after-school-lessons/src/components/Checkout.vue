<template>
  <div class="checkout-container">
    <h2>Checkout</h2>
    <div class="lessons">
      <ul class="lesson" v-for="lesson in cart" :key="lesson.id">
        <li>Topic: {{ lesson.topic }}</li>
        <li>Location: {{ lesson.location }}</li>
        <li>Price: ${{ lesson.price }}</li>
        <li>Spaces: {{ lesson.spaces }}</li>
        <div class="text-center">
          <button @click="removeLesson(index)">Remove</button>
        </div>
      </ul>
    </div>

    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="name" />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" v-model="phone" />
      </div>

      <button
        class="submit-button action-button"
        v-if="name && phone"
        type="button"
        @click="submit"
        style="margin-left: 0"
      >
        Submit Order
      </button>
      <button
        class="submit-button action-button disabled"
        style="margin-left: 0"
        type="button"
        v-else
      >
        Submit Order
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "CheckOut",
  props: ["cart"],
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    removeLesson(index) {
      this.$emit("remove", index);
    },
    submit() {
      alert(`Dear ${this.name}, your order has been submitted! `);
      location.reload();
    },
  },
};
</script>

<style>
.checkout-container {
  padding: 20px;
}

.lessons {
  flex-wrap: wrap;
}

ul.lesson {
  margin-top: 20px;
}

form {
  display: flex;
  margin: 30px 0;
  justify-content: center;
}

.form-group {
  margin-right: 20px;
}

.form-group {
  font-weight: bold;
}

.form-group > * {
  display: block;
}

button.submit-button {
  margin-top: auto;
  margin-bottom: auto;
  margin-top: 10px;
}

button.disabled {
  color: white;
  background: rgba(226, 62, 62, 0.699);
  outline: none;
  padding: 8px 25px;
  opacity: 0.8;
  border: none;
  margin-top: 8px;
  border-radius: 4px;
}
</style>

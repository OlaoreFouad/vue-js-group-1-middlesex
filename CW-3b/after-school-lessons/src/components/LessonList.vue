<template>
  <div>
    <div class="lessons">
      <ul class="lesson" v-for="lesson in lessons" :key="lesson.id">
        <li>Topic: {{ lesson.topic }}</li>
        <li>Location: {{ lesson.location }}</li>
        <li>Price: ${{ lesson.price }}</li>
        <li>Spaces: {{ lesson.spaces }}</li>
        <div class="text-center">
          <button v-if="lesson.spaces > 0" @click="addToCart(lesson)">
            Add To Cart
          </button>
          <button class="disabled" v-else>Add To Cart</button>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "LessonList",
  data() {
    return {
      lessons: [],
    };
  },
  methods: {
    addToCart(lesson) {
      lesson.spaces--;
      console.log("emitting value!");
      this.$emit("addToCart", lesson);
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
.lessons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
}

ul.lesson {
  margin: 0;
  padding: 20px;
  width: 200px;
  border: 2px solid lightblue;
}

ul.lesson li {
  margin-left: 20px;
}

.text-center {
  text-align: center;
}

.text-center button {
  color: white;
  background: brown;
  outline: none;
  padding: 8px 25px;
  border: none;
  margin-top: 8px;
  border-radius: 4px;
}

.text-center button.disabled {
  color: white;
  background: rgba(226, 62, 62, 0.699);
  outline: none;
  padding: 8px 25px;
  opacity: 0.8;
  border: none;
  margin-top: 8px;
  border-radius: 4px;
}

.text-center button:hover {
  cursor: pointer;
}
</style>

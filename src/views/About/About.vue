<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ counter }}</div>
    <button @click="inc">Add Count</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    inc(): void {
      this.counter++;
    },
  },
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ counter }}</div>
    <button @click="inc">Add Count</button>
    <button @click="init">Init Count</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store, { INIT_STATE, INCREMENT_COUNTER } from './reducers';

export default Vue.extend({
  data() {
    return {
      counter: store.getState().myState.counter,
    };
  },
  methods: {
    inc(): void {
      store.dispatch({ type: INCREMENT_COUNTER });
    },
    init(): void {
      store.dispatch({ type: INIT_STATE });
    },
  },
  created() {
    store.subscribe(() => {
      this.counter = store.getState().myState.counter;
    });
  },
});
</script>

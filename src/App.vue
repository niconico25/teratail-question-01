<template>
  <div id="app">
    <div>
      <input v-model="newArrayValue">
      <button @click="$store.commit('insertToArray', Number(newArrayValue))">
        Button
      </button>
      <div>
        {{ $store.state.array }}
      </div>
      <div>
        {{ $store.getters.sumArray }}
      </div>
    </div>
    <div>
      <input v-model="newTreeValue">
      <button @click="$store.commit('insertToTree', Number(newTreeValue))">
        Button
      </button>
      <div>
        {{ $store.state.root }}
      </div>
      <div>
        {{ $store.getters.sumTree }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newArrayValue: undefined,
      newTreeValue: undefined
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

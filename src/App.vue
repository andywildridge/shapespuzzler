<template>
  <Stage :shapes="shapes" :pegs="pegs" />
</template>

<script>
import Stage from "./components/Stage.vue";
import getPegs from "./utils/dice";
import shapes from "./utils/shapesDefns";

export default {
  name: "App",
  components: {
    Stage,
  },
  data() {
    return {
      pegs: getPegs().map((peg) => ({ x: peg.x + 2, y: peg.y + 2 })),
      shapes,
    };
  },
};
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

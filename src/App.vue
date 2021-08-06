<template>
  <Stage :shapes="shapes" :pegs="pegs" />
</template>

<script>
import Stage from "./components/Stage.vue";

export default {
  name: "App",
  components: {
    Stage,
  },
  data() {
    return {
      pegs: [
        { x: 3, y: 1 },
        { x: 5, y: 4 },
      ],
      shapes: [
        {
          x: 100,
          y: 0,
          color: "red",
          defn: [
            [0, 1],
            [1, 1],
          ],
        },
        {
          x: 60,
          y: 60,
          color: "brown",
          defn: [
            [0, 1],
            [1, 1],
          ],
        },
        {
          x: 90,
          y: 160,
          color: "blue",
          defn: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
          ],
        },
        {
          x: 190,
          y: 30,
          color: "green",
          defn: [
            [0, 1, 0],
            [1, 1, 1],
          ],
        },
        {
          x: 290,
          y: 30,
          color: "cyan",
          defn: [[1, 1, 1]],
        },
        {
          x: 290,
          y: 30,
          color: "grey",
          defn: [
            [1, 1],
            [1, 1],
          ],
        },
      ],
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

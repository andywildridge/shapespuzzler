<template>
  <div class="board">
    <Peg v-for="(peg, index) in pegs" :key="index" :position="peg" />
  </div>
</template>

<script>
import Peg from "./Peg.vue";

export default {
  name: "Shape",
  components: {
    Peg,
  },
  props: {
    pegs: Array,
  },
  created() {
    console.log(this.pegs);
  },
};

// console.log(this.pegs);
</script>

<style scoped>
.board {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 300px;
  height: 250px;
  pointer-events: none;
  background: #ccc;
}
</style>

<template>
  <div class="peg" :x="x" :style="cssProps"></div>
</template>

<script>
export default {
  name: "Peg",
  props: {
    position: Object,
  },
  computed: {
    cssProps() {
      return {
        "--x": this.position.x * 50 + "px",
        "--y": this.position.y * 50 + "px",
      };
    },
  },
};
</script>

<style scoped>
.peg {
  position: absolute;
  width: 50px;
  height: 50px;
  left: var(--x);
  top: var(--y);
  border-radius: 50%;
  pointer-events: none;
  background: black;
}
</style>

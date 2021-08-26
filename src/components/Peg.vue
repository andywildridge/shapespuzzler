<template>
  <div class="peg" :x="x" :style="cssProps"></div>
</template>

<script>
function randomBorder() {
  return Math.round(Math.random() * 40) + 30;
}
export default {
  name: "Peg",
  props: {
    position: Object,
  },
  computed: {
    cssProps() {
      return {
        "--x": this.position.x * 50 + 2 + "px",
        "--y": this.position.y * 50 + 2 + "px",
        "border-radius": `${randomBorder()}% ${randomBorder()}% ${randomBorder()}% ${randomBorder()}% / ${randomBorder()}% ${randomBorder()}% ${randomBorder()}% ${randomBorder()}%`,
      };
    },
  },
};
</script>

<style scoped>
.peg {
  position: absolute;
  width: 42px;
  height: 42px;
  left: var(--x);
  top: var(--y);
  pointer-events: none;
  background: #ff6464;
  border: 2px solid #616161;
}
</style>

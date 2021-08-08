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
        "--x": this.position.x * 50 + 2 + "px",
        "--y": this.position.y * 50 + 2 + "px",
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
  border-radius: 50%;
  pointer-events: none;
  background: #ff6464;
  border: 2px solid #616161;
}
</style>

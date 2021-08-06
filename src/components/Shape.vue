<template>
  <div ref="shape" @mousedown="mousedown" class="shape">
    <svg width="100%" :viewBox="viewbox">
      <g>
        <rect
          v-for="(coord, index) in defnCoords"
          v-bind:key="index"
          :x="coord.x"
          :y="coord.y"
          width="1"
          height="1"
          rx="0.1"
          :fill="shapeData.color"
          data-target="true"
        />
      </g>
    </svg>
  </div>
</template>

<script>
function defnToCoords(defn) {
  const coords = defn.reduce((arr, row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col) {
        arr.push({ x: colIdx, y: rowIdx });
      }
    });
    return arr;
  }, []);
  return coords;
}

export default {
  name: "Shape",
  props: {
    id: Number,
    shapeData: Object,
    position: Object,
  },
  watch: {
    position: function (newVal) {
      this.render(newVal.x, newVal.y, newVal.rotate, 1, newVal.z);
    },
  },
  mounted() {
    this.render(this.shapeData.x, this.shapeData.y);
  },
  data() {
    return {
      moveStart: {
        x: null,
        y: null,
      },
      moveNow: {
        x: null,
        y: null,
      },
      defnCoords: defnToCoords(this.shapeData.defn),
      width: this.shapeData.defn[0].length,
      height: this.shapeData.defn.length,
      viewbox: `0 0 ${this.shapeData.defn[0].length} ${this.shapeData.defn.length}`, //${this.shapeData.defn[0].length} ${this.shapeData.defn.length}`,
    };
  },
  methods: {
    mousedown(e) {
      if (e.target.dataset.target) {
        const shapeElBCR = this.$refs.shape.getBoundingClientRect();
        if (
          shapeElBCR.bottom - e.pageY < 10 ||
          shapeElBCR.top - e.pageY > -10 ||
          shapeElBCR.right - e.pageX < 10 ||
          shapeElBCR.left - e.pageX > -10
        ) {
          const centre = {
            x: shapeElBCR.left + shapeElBCR.width / 2,
            y: shapeElBCR.top + shapeElBCR.height / 2,
          };
          const angle =
            (Math.atan2(e.pageY - centre.y, e.pageX - centre.x) * 180) /
            Math.PI;
          this.$emit("rotate", {
            id: this.id,
            startAngle: angle - this.position.rotate,
            centre,
          });
        } else {
          this.$emit("move", this.id);
        }

        // console.log("pos", this.shapeData);
      }
    },
    render(x, y, rotation = 0, size = 1, z = 0) {
      const el = this.$refs.shape;
      const renderDefn = {
        width: `${this.width * 50}px`,
        height: `${this.height * 50}px`,
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${size})`,
        transformOrigin: "center",
        zIndex: z,
      };

      el.animate([renderDefn, renderDefn], { duration: 0, fill: "forwards" });
    },
  },
};
</script>

<style scoped>
.shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  pointer-events: none;
}
rect {
  pointer-events: initial;
}
</style>

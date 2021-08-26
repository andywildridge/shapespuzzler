<template>
  <div
    ref="shape"
    @mousedown="mousedown"
    @mousemove="mousemove"
    @mouseout="mouseout"
    @dblclick="dblclick"
    class="shape"
  >
    <svg width="100%" :viewBox="viewbox">
      <g>
        <rect
          v-for="(coord, index) in defnCoords"
          v-bind:key="index"
          :x="coord.x + 0.02"
          :y="coord.y + 0.02"
          width="0.975"
          height="0.975"
          stroke="rgb(85 85 85 / 75%)"
          stroke-width="0.025"
          rx="0.1"
          :fill="shapeData.color"
          data-target="true"
        />
      </g>
    </svg>
  </div>
</template>

<script>
let handleSize = 10;
let handleDirection = 1;

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
      this.render(
        newVal.x,
        newVal.y,
        newVal.rotate,
        newVal.size,
        newVal.flip,
        newVal.z
      );
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
    mouseout() {
      this.render(
        this.shapeData.x,
        this.shapeData.y,
        this.shapeData.rotate,
        this.shapeData.size,
        this.shapeData.flip,
        this.shapeData.z
      );
      handleSize = 10;
      handleDirection *= -1;
    },
    mousemove(e) {
      if (e.target.dataset.target) {
        const shapeElBCR = this.$refs.shape.getBoundingClientRect();
        const segmentElBCR = e.target.getBoundingClientRect();
        if (
          (shapeElBCR.bottom - e.pageY < handleSize ||
            shapeElBCR.top - e.pageY > -handleSize ||
            shapeElBCR.right - e.pageX < handleSize ||
            shapeElBCR.left - e.pageX > -handleSize) &&
          ((segmentElBCR.top - e.pageY > -handleSize &&
            segmentElBCR.left - e.pageX > -handleSize) ||
            (segmentElBCR.top - e.pageY > -handleSize &&
              segmentElBCR.right - e.pageX < handleSize) ||
            (segmentElBCR.bottom - e.pageY < handleSize &&
              segmentElBCR.left - e.pageX > -handleSize) ||
            (segmentElBCR.bottom - e.pageY < handleSize &&
              segmentElBCR.right - e.pageX < handleSize))
        ) {
          this.render(
            this.shapeData.x,
            this.shapeData.y,
            this.shapeData.rotate + handleDirection,
            this.shapeData.size,
            this.shapeData.flip,
            this.shapeData.z
          );
          handleSize = 15;
        } else {
          this.render(
            this.shapeData.x,
            this.shapeData.y,
            this.shapeData.rotate,
            this.shapeData.size,
            this.shapeData.flip,
            this.shapeData.z
          );
          handleSize = 10;
          handleDirection *= -1;
        }
      }
    },
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
    dblclick() {
      this.$emit("flip", this.id);
    },
    render(x, y, rotation = 0, size = 1, flip = 1, z = 0) {
      // console.log(flip);
      const el = this.$refs.shape;
      const renderDefn = {
        width: `${this.width * 50}px`,
        height: `${this.height * 50}px`,
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${size}, ${flip})`,
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
.shape.hover {
  transform: rotate(2deg);
}
rect {
  pointer-events: initial;
  background: url("~@/assets/wood.png");
}
</style>

<template>
  <div class="backstage">
    <Board2 />
  </div>
  <div
    @mouseup="mouseup"
    @mousedown="mousedown"
    @mousemove="mousemove"
    class="stage"
  >
    <Board :pegs="pegs" />
    <Shape
      v-for="(shape, index) in shapes"
      :key="index"
      :id="index"
      @move="move"
      @rotate="rotate"
      :shapeData="shapeData[index]"
      :position="{
        x: shapeData[index].x,
        y: shapeData[index].y,
        z: shapeData[index].z,
        rotate: shapeData[index].rotate || 0,
      }"
    />
  </div>
</template>

<script>
import Board from "./Board.vue";
import Board2 from "./Board2.vue";
import Shape from "./Shape.vue";
import canPlace from "../utils/canPlace";
import snap from "../utils/snap";

const gridPlacings = {};
let lastValidPosition = {};

export default {
  name: "Stage",
  components: {
    Board,
    Board2,
    Shape,
  },
  props: {
    shapes: Array,
    pegs: Array,
  },
  created() {
    gridPlacings.pegs = [...this.pegs].map((i) => ({ x: i.x + 2, y: i.y + 2 }));
    console.log(gridPlacings);
  },
  data() {
    return {
      moveStart: { x: null, y: null },
      moveItem: null,
      shapeData: [...this.shapes],
    };
  },
  methods: {
    move(id) {
      this.moveItem = {
        id,
        type: "move",
        startX: this.shapeData[id].x,
        startY: this.shapeData[id].y,
      };
      this.shapeData[this.moveItem.id].z = 1;
      lastValidPosition = {
        x: this.shapeData[this.moveItem.id].x,
        y: this.shapeData[this.moveItem.id].y,
        rotate: this.shapeData[this.moveItem.id].rotate,
      };
    },
    rotate(data) {
      const { centre, id, startAngle } = data;
      this.moveItem = {
        id,
        centre,
        startAngle,
        type: "rotate",
      };
      this.shapeData[this.moveItem.id].z = 1;
      lastValidPosition = {
        x: this.shapeData[this.moveItem.id].x,
        y: this.shapeData[this.moveItem.id].y,
        rotate: this.shapeData[this.moveItem.id].rotate,
      };
    },
    mousedown(e) {
      this.moveStart.x = e.pageX;
      this.moveStart.y = e.pageY;
    },
    mouseup() {
      if (this.moveItem === null) {
        return false;
      }
      this.moveStart.x = null;
      this.moveStart.y = null;

      let { x, y, rotate, gridCoords } = snap(this.shapeData, this.moveItem.id);
      console.log(gridPlacings);
      if (canPlace(gridPlacings, gridCoords, this.moveItem.id)) {
        gridPlacings[this.moveItem.id] = gridCoords;
      } else {
        ({ x, y, rotate } = lastValidPosition);
        this.shapeData[this.moveItem.id].x = x;
        this.shapeData[this.moveItem.id].y = y;
        this.shapeData[this.moveItem.id].rotate = rotate;
        ({ x, y, rotate } = snap(this.shapeData, this.moveItem.id));
      }
      this.shapeData[this.moveItem.id].x = x;
      this.shapeData[this.moveItem.id].y = y;
      this.shapeData[this.moveItem.id].rotate = rotate;
      this.shapeData[this.moveItem.id].z = 0;
      this.moveItem = null;
    },
    mousemove(e) {
      if (this.moveItem === null) {
        return false;
      }
      const x = e.pageX - this.moveStart.x;
      const y = e.pageY - this.moveStart.y;
      if (this.moveItem.type === "move") {
        this.shapeData[this.moveItem.id].x = this.moveItem.startX + x;
        this.shapeData[this.moveItem.id].y = this.moveItem.startY + y;
      } else if (this.moveItem.type === "rotate") {
        const centre = this.moveItem.centre;
        const angle =
          (Math.atan2(e.pageY - centre.y, e.pageX - centre.x) * 180) / Math.PI;
        this.shapeData[this.moveItem.id].rotate =
          angle - this.moveItem.startAngle;
      }
      let { gridCoords } = snap(this.shapeData, this.moveItem.id);
      if (canPlace(gridPlacings, gridCoords, this.moveItem.id)) {
        gridPlacings[this.moveItem.id] = gridCoords;
        lastValidPosition = {
          x: this.shapeData[this.moveItem.id].x,
          y: this.shapeData[this.moveItem.id].y,
          rotate: this.shapeData[this.moveItem.id].rotate,
        };
      }
    },
  },
};
</script>

<style scoped>
.stage {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: drop-shadow(2px 5px 4px #999);
}
.backstage {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: drop-shadow(2px 5px 4px #999);
}
</style>

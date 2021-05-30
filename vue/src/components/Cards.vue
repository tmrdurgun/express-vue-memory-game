<template>
  <div class="hello">
    <h2>Cards</h2>
    <p>Click to flip any of the below cards</p>

    <div class="scene">
      <div class="card">
        <div class="card__face card__face--front">front</div>
        <div class="card__face card__face--back">back</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  width: 200px;
  height: 260px;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card__face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.card__face--front {
  background: red;
}

.card__face--back {
  background: blue;
  transform: rotateY(180deg);
}

.card.is-flipped {
  transform: rotateY(180deg);
}
</style>
<script>
import "./style.css";

export default {
  name: "Cards",
  props: {},
  async mounted() {
    // console.log(this.display);
  },
};
</script>
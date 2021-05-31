<template>
  <div class="card-game-container">
    <div class="header">
      <h2>Cards</h2>
      <p>Click to flip any of the below cards</p>
    </div>

    <div class="cards-container">
      <div class="cards" v-for="(num, x) in nums" :key="x">
        <div class="card">
          <div class="card__face card__face--front">
            <span>{{ num }}</span>
          </div>
          <div class="card__face card__face--back">back</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.css";

export default {
  name: "Cards",
  props: ["nums"],
  async mounted() {
    console.log("nums: ", this.nums);
  },
};
</script>
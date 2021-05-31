<template>
  <div class="card-game-container">
    <div class="header">
      <h2>Cards</h2>
      <p>Click to flip any of the below cards</p>
    </div>

    <div class="cards-container">
      <div
        class="cards"
        v-for="(num, x) in nums"
        :key="x"
        @click="() => this.selectCard(num)"
      >
        <div
          :class="`card ${selectedCards.indexOf(num) >= 0 ? 'is-flipped' : ''}`"
        >
          <div class="card__face card__face--front"></div>
          <div class="card__face card__face--back">
            <span>{{ num }}</span>
          </div>
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
  data() {
    return {
      selectedCards: [],
    };
  },
  methods: {
    selectCard(val) {
      if (this.selectedCards.indexOf(val) === -1) {
        this.selectedCards.push(val);
      }
    },
  },
  async mounted() {
    this.selectedCards = this.nums;
    console.log("selectedCards: ", this.selectedCards);

    setTimeout(() => {
      this.selectedCards = [];
    }, 5000);
  },
};
</script>
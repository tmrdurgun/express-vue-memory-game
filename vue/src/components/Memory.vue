<template>
  <div class="memory-game-container">
    <div class="header" v-if="!this.cardNums">
      <div class="row">
        <div class="col">
          <h2>Welcome to memory game</h2>
          <p>Please choose how many cards do you want to play</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 mx-auto">
          <div class="form-group">
            <select class="form-control" @change="this.getRandomNumbers">
              <option value=""></option>
              <option>4</option>
              <option>8</option>
              <option>12</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <Cards :nums="cardNums" v-if="this.cardNums" />
  </div>
</template>

<script>
import "./style.css";
import Cards from "./Cards";
import axios from "axios";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      cardNums: null,
    };
  },
  components: {
    Cards,
  },
  methods: {
    async getRandomNumbers(e) {
      const randNumbers = await axios.post(
        "http://127.0.0.1:3002/api/memory/getRandomNumbers",
        {
          size: Number(e.target.value),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (randNumbers) this.cardNums = randNumbers.data.data;

      console.log("cardNums: ", this.cardNums);
    },
  },
};
</script>
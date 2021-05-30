<template>
  <div class="memory-game-container">
    <div class="row">
      <div class="col">
        <h2>Welcome to memory game</h2>
        <p>Please choose how many cards do you want to play</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 mx-auto">
        <div class="form-group">
          <select class="form-control" @change="this.handleSelectSize($event)">
            <option value=""></option>
            <option>4</option>
            <option>8</option>
            <option>12</option>
          </select>
        </div>
      </div>
    </div>

    <Cards />
  </div>
</template>

<script>
import "./style.css";
import Cards from "./Cards";
import axios from "axios";

export default {
  name: "Memory",
  props: {
    msg: String,
  },
  data: function () {
    return {
      randNumbers: null,
    };
  },
  components: {
    Cards,
  },
  methods: {
    handleSelectSize: async (e) => {
      console.log(e.target.value);

      await this.getRandomNumbers(Number(e.target.value));
    },
    getRandomNumbers: async (size) => {
      const randNumbers = await axios.post(
        "http://127.0.0.1:3002/api/memory/getRandomNumbers",
        {
          size,
        }
      );

      console.log("randNumbers: ", randNumbers);

      if (randNumbers) this.randNumbers = randNumbers;
    },
  },
};
</script>
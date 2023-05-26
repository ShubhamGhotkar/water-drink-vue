<template>
  <div id="container">
    <p class="goal">Goal: 2Liters</p>

    <big-glass
      :remainingVolume="remainingVolume"
      :waterAddedVolume="waterAddedVolume"
    ></big-glass>

    <p class="goal">Select how many glasses of water that you have drank</p>

    <div class="flex-container">
      <div
        v-for="num in 8"
        :key="num"
        @click="addWater(num)"
        :class="getClass(num)"
      >
        <small-glass></small-glass>
      </div>
    </div>
  </div>
</template>

<script>
import BigGlass from "../components/BigGlass.vue";
import SmallGlass from "../components/SmallGlass.vue";
export default {
  components: {
    BigGlass,
    SmallGlass,
  },
  data() {
    return {
      remainingVolume: 2,
      waterAddedVolume: 0,
      addStyleIndex: null,
      waterAdded: false,
    };
  },
  methods: {
    addWater(pos) {
      console.log("click");
      this.waterAdded = !this.waterAdded;
      if (this.waterAdded) {
        this.addStyleIndex = pos;
        this.remainingVolume = 2 - pos * 0.25;
        this.waterAddedVolume = pos * 0.25;
      } else {
        this.remainingVolume += 0.25;
        this.waterAddedVolume -= 0.25;
      }
    },

    getClass(num) {
      if (this.waterAdded) {
        return this.addStyleIndex < num
          ? "container-jar"
          : "fill container-jar";
      } else {
        return this.addStyleIndex <= num
          ? "container-jar"
          : "fill container-jar";
      }
    },
  },
};
</script>

<style scoped>
.goal {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 3rem;
}
#container {
  height: 100vh;
  width: 100vw;
  background-color: #3494e4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex-container {
  width: 30%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.container-jar {
  height: 10rem;
  width: 8rem;
  border: 3.2px solid #4444c3;
  background-color: white;
  border-radius: 0 0 1.2rem 1.2rem;
  cursor: pointer;

  display: grid;
  place-items: center;
}

.fill {
  background-color: skyblue;
  transition: all 0.3s ease-in-out;
}
</style>

<template>
  <div id="container">
    <p class="goal">Goal: 2Liters</p>

    <big-glass
      :remainingVolume="remainingVolume"
      :waterAddedVolume="waterAddedVolume"
    ></big-glass>

    <p class="goal">Select how many glasses of water that you have drank</p>

    <small-glass @get-data="getData"></small-glass>
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
    };
  },
  methods: {
    getData(data) {
      const [remVol, waterVol] = data;

      this.remainingVolume = remVol;
      this.waterAddedVolume = waterVol;
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
</style>

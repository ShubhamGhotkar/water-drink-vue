<template>
  <div class="flex-container">
    <span v-for="num in 8" :key="num" @click="addWater(num)">
      <div :class="getClass(num)">
        <p class="para">250 ml</p>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addStyleIndex: null,
      waterAdded: false,
      remainingVolume: 2,
      waterAddedVolume: 0,
    };
  },
  methods: {
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

    addWater(pos) {
      this.waterAdded = !this.waterAdded;
      if (this.waterAdded) {
        this.addStyleIndex = pos;
        this.remainingVolume = 2 - pos * 0.25;
        this.waterAddedVolume = pos * 0.25;
      } else {
        this.remainingVolume += 0.25;
        this.waterAddedVolume -= 0.25;
      }
      this.$emit("get-data", [this.remainingVolume, this.waterAddedVolume]);
    },
  },
};
</script>

<style scoped>
.para {
  font-size: 1.6rem;
  text-align: center;
  font-weight: 700;
}

.container-jar {
  height: 12rem;
  width: 7rem;
  border: 3.2px solid #4444c3;
  background-color: white;
  border-radius: 0 0 2.5rem 2.5rem;
  cursor: pointer;

  display: grid;
  place-items: center;
}
.fill {
  background-color: skyblue !important;
  transition: all 0.3s ease-in-out;
}

.flex-container {
  width: 30%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;
  row-gap: 2rem;
}
</style>

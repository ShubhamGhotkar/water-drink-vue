<template>
  <div class="container_big--jar">
    <div
      class="upper-level"
      :style="{ height: upperHeight }"
      v-if="remainingVolume !== 0"
    >
      <span>{{ remainingVolume }}L</span>
      <span>remained</span>
    </div>
    <div
      class="lower-lavel"
      :style="{ height: lowerHeight }"
      v-if="waterAddedVolume !== 0"
    >
      <p>{{ waterAddedVolume * 50 }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["remainingVolume", "waterAddedVolume"],
  computed: {
    upperHeight() {
      return 100 - this.waterAddedVolume * 50 + "%";
    },
    lowerHeight() {
      return this.waterAddedVolume * 50 + "%";
    },
  },
};
</script>

<style scoped>
.container_big--jar {
  height: 35rem;
  width: 17rem;
  border-radius: 0 0 3rem 3rem;
  border: 3.5px solid #4444c3;

  margin-bottom: 3rem;
  overflow: hidden;
  transition: all 0.3s ease-in;
  position: relative;
}

.upper-level,
.lower-lavel {
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  color: #4444c3;
  text-align: center;
  font-weight: 600;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  transition: all 0.3s ease-in;
  position: absolute;
}

.upper-level {
  line-height: 0.5;
}

.lower-lavel {
  height: 0;
  background-color: skyblue;
  bottom: 0%;
}
</style>

<script setup>

</script>

<template>
  <section>
    <button class="btn absolute top-0 left-0" @click="$emit('callback')" >Stop Scanning</button>
    <div class="square">

    </div>
  </section>

</template>

<style scoped>
.square {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  width: 200px;
  height: 200px;
  border: 6px solid white;
  box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.3);
}
</style>
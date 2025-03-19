<template>
  <div :style="{ 
    backgroundColor: theme === 'dark' ? '#eff6ff' : '',
    height: height + 'px' }" 
    class="divider"></div>
</template>

<script>
export default {
  name: 'DividerComponent',
  props: {
    height: {
      type: Number,
      default: 150
    },
    theme: {
        type: String,
        default: 'light'
    }
  }
}
</script>

<style scoped>
    .divider {
        width: 100%;
    }
</style>


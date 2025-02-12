<template>
  <div id="sputnik-ui">
    <h1>Hello world!</h1>
    <h2>Hello world!</h2>
    <p>Hello world!</p>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
#sputnik-ui {
  @include text;
  
  h1 {
    @include h1;
  }
  h2 {
    @include h2;
  }
}
</style>
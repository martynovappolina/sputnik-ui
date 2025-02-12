<template>
  <div id="sputnik-ui">
    <Menu :items="menuItems" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  },
  
  data() {
    return {
      menuItems: [
        { text: 'Пункт 1', submenu: [
          { text: 'Подпункт' }, 
          { text: 'Подпункт' },
          { text: 'Подпункт' },
          { text: 'Подпункт' },
        ] },
        { text: 'Пункт 2', submenu: [{ text: 'Подпункт' }, { text: 'Подпункт' }] },
        { text: 'Пункт 3' },
        { text: 'Пункт 4' }
      ]
    };
  }
}
</script>

<style lang="scss">
#sputnik-ui {
  background-color: $primary;
  height: 5000px;
  @include text;
  
  h1 {
    @include h1;
  }
  h2 {
    @include h2;
  }
}
</style>
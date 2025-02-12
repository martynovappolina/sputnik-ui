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
          { text: 'Подпункт', path: '/punkt1/sub1' }, 
          { text: 'Подпункт', path: '/punkt1/sub2' },
          { text: 'Подпункт', path: '/punkt1/sub3' },
          { text: 'Подпункт', path: '/punkt1/sub4' },
        ] },
        { text: 'Пункт 2', submenu: [
          { text: 'Подпункт', path: '/punkt2/sub1' }, 
          { text: 'Подпункт', path: '/punkt2/sub2' }
        ] },
        { text: 'Пункт 3', path: '/punkt3' },
        { text: 'Пункт 4', path: '/punkt4' }
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
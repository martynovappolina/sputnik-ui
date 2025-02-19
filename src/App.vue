<template>
  <div class="sputnik-ui">
    <Menu :items="menuItems" />
    <Cover />
    <CardsBlock />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Cover from './components/Cover.vue';
import CardsBlock from './components/CardsBlock.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Cover,
    CardsBlock
  },
  
  data() {
    return {
      menuItems: [
        { text: 'Пункт 1', submenu: [
          { text: 'Подпункт', onClick: () => window.location.href = '/punkt1/sub1' }, 
          { text: 'Подпункт', onClick: () => window.location.href = '/punkt1/sub2' },
          { text: 'Подпункт', onClick: () => window.location.href = '/punkt1/sub3' },
          { text: 'Подпункт', onClick: () => window.location.href = '/punkt1/sub4' },
        ] },
        { text: 'Пункт 2', submenu: [
          { text: 'Подпункт', onClick: () => window.location.href = '/punkt2/sub1' }, 
          { text: 'Подпункт', onClick: () => window.location.href = '/punkt2/sub2' }
        ] },
        { text: 'Пункт 3', onClick: () => window.location.href = '/punkt3' },
        { text: 'Пункт 4', onClick: () => window.location.href = '/punkt4' }
      ]
    };
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .sputnik-ui {
    margin: 0 auto;
    
    @include text;
    
    h1 {
      @include h1;
    }
    h2 {
      @include h2;
    }

    @media (max-width: 400px) {
      @include big-text;
    }
  }
</style>
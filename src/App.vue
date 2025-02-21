<template>
  <div class="sputnik-ui">
    <Menu />
    <Cover />
    <CardsBlock />
    <Contacts />
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Cover from './components/Cover.vue';
import CardsBlock from './components/CardsBlock.vue';
import Contacts from './components/Contacts.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Cover,
    CardsBlock,
    Contacts,
    Footer
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
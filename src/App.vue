<template>
  <Page>
    <Menu />
    <Cover />
    <HorizontalCardsBlock />
    <Contacts />
    <Footer />
  </Page>
</template>

<script>
  import Page from './components/Page.vue';
  import Menu from './components/Menu.vue';
  import Cover from './components/Cover.vue';
  import HorizontalCardsBlock from './components/HorizontalCardsBlock.vue';
  import Contacts from './components/Contacts.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Page,
      Menu,
      Cover,
      HorizontalCardsBlock,
      Contacts,
      Footer
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>

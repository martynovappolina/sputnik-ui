<template>
  <Page>
    <Menu />
    <Cover />
    <VerticalCardWithImageAndText />
    <Footer />
  </Page>
</template>

<script>
  import Page from './components/Page.vue';
  import Menu from './components/Menu.vue';
  import Cover from './components/Cover.vue';
  import Footer from './components/Footer.vue';
  import VerticalCardWithImageAndText from './components/VerticalCardWithImageAndText.vue';

  export default {
    name: 'App',
    components: {
      Page,
      Menu,
      Cover,
      Footer,
      VerticalCardWithImageAndText
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>

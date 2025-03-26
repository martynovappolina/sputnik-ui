<template>
  <Page>
    <Menu />
    <Cover />
    <List />
    <HorizontalCardsBlock />
    <VerticalCardWithImageAndText theme="dark" />
    <NumberedList />
    <TextBlockWithHeader theme="dark" />
    <MultiColumnListWithIcons />
    <Stages theme="dark" />
    <GridWithCards />
    <Contacts />
    <Footer />
  </Page>
</template>

<script>
  import {
    Page,
    Menu,
    Cover,
    List,
    VerticalCardWithImageAndText,
    HorizontalCardsBlock,
    NumberedList,
    Contacts,
    Footer,
    TextBlockWithHeader,
    MultiColumnListWithIcons,
    Stages,
    GridWithCards
  } from './index';

  export default {
    name: 'App',
    components: {
      Page,
      Menu,
      Cover,
      List,
      Footer,
      VerticalCardWithImageAndText,
      HorizontalCardsBlock,
      Contacts,
      NumberedList,
      TextBlockWithHeader,
      MultiColumnListWithIcons,
      Stages,
      GridWithCards
    },
    methods: {
      onClickLogo() {
        window.location.href = '/';
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>


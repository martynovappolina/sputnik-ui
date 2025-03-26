<template>
  <Page>
    <Menu />
    <Cover />
    <HorizontalBlocksWithPictureTitleAndText />
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
    VerticalCardWithImageAndText,
    HorizontalCardsBlock,
    NumberedList,
    Contacts,
    Footer,
    TextBlockWithHeader,
    MultiColumnListWithIcons,
    Stages,
    HorizontalBlocksWithPictureTitleAndText,
    GridWithCards
  } from './index';

  export default {
    name: 'App',
    components: {
      Page,
      Menu,
      Cover,
      Footer,
      VerticalCardWithImageAndText,
      HorizontalCardsBlock,
      HorizontalBlocksWithPictureTitleAndText,
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


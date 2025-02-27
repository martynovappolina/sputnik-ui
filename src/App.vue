<template>
  <Page>
    <Menu />
    <Cover />
    <HorizontalCardsBlock />
    <VerticalCardWithImageAndText />
    <NumberedList />
    <TextBlockWithHeader />
    <MultiColumnListWithIcons />
    <Stages />
    <Contacts />
    <Footer />
  </Page>
</template>

<script>
  import Page from './components/Page.vue';
  import Menu from './components/Menu.vue';
  import Cover from './components/Cover.vue';
  import VerticalCardWithImageAndText from './components/VerticalCardWithImageAndText.vue';
  import HorizontalCardsBlock from './components/HorizontalCardsBlock.vue';
  import NumberedList from './components/NumberedList.vue';
  import Contacts from './components/Contacts.vue';
  import Footer from './components/Footer.vue';
  import TextBlockWithHeader from './components/TextBlockWithHeader.vue';
  import MultiColumnListWithIcons from './components/MultiColumnListWithIcons.vue';
  import Stages from './components/Stages.vue';

  export default {
    name: 'App',
    components: {
      Page,
      Menu,
      Cover,
      Footer,
      VerticalCardWithImageAndText,
      HorizontalCardsBlock,
      Contacts,
      NumberedList,
      TextBlockWithHeader,
      MultiColumnListWithIcons,
      Stages
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>

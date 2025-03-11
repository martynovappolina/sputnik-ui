<template>
  <Page>
    <Menu
      :items="menuItems"
      :logoIconPath="require('@/assets/icons/logo.svg')"
      :onClickLogo="onClickLogo"
    />
    <Cover />
    <HorizontalCardsBlock :items="horizontalCardsBlockItems" />
    <VerticalCardWithImageAndText theme="dark" />
    <NumberedList />
    <TextBlockWithHeader theme="dark" />
    <MultiColumnListWithIcons />
    <Stages theme="dark" />
    <GridWithCards />
    <Contacts />
    <Test />
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
  import Test from './components/Test.vue';
  import Footer from './components/Footer.vue';
  import TextBlockWithHeader from './components/TextBlockWithHeader.vue';
  import MultiColumnListWithIcons from './components/MultiColumnListWithIcons.vue';
  import Stages from './components/Stages.vue';
  import GridWithCards from './components/GridWithCards.vue';

  export default {
    name: 'App',
    components: {
      Page,
      Menu,
      Cover,
      Footer,
      Test,
      VerticalCardWithImageAndText,
      HorizontalCardsBlock,
      Contacts,
      NumberedList,
      TextBlockWithHeader,
      MultiColumnListWithIcons,
      Stages,
      GridWithCards
    },
    data() {
      return {
        horizontalCardsBlockItems: [
          {
            header: 'Бизнес-инкубатор',
            text: 'Это структурное подразделение, которое оказывает содействие в развитии инновационных проектов, начиная от стадии идеи и заканчивая реализацией готового продукта.',
            imagePosition: 'left',
            imagePath: require('@/assets/imgs/project.png'),
            onClick: () => {}
          },
          {
            header: 'Бизнес-акселератор',
            text: 'Это программа, которая помогает инновационным проектам достичь своих целей за счет привлечения ресурсов и знаний извне.',
            imagePosition: 'right',
            imagePath: require('@/assets/imgs/project2.png'),
            onClick: () => {}
          }
        ],
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


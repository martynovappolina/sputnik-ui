<template>
  <div class="footer">
    <div 
    :style="{ flex: `0 0 calc(${100/items.length}% - 20px)` }"
    class="column" v-for="item in items" :key="item.text">
      <h3 @click="item.onClick ? item.onClick() : ()=>{}">{{ item.text }}</h3>
      <ul v-if="item.submenu">
        <li v-for="subitem in item.submenu" :key="subitem.text" @click="subitem.onClick">
          {{ subitem.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterWithText',
  props: {
    items: {
      type: Array,
      default: () => [
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
        { text: 'Пункт 4', onClick: () => window.location.href = '/punkt3' }
      ]
    }
  }   
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables.scss';

  .footer {
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    background-color: $primary;
    color: $light;

    .column {
        margin: 0 10px;
        padding: 0 30px;
        box-sizing: border-box;

        h3 {
          cursor: pointer;
          margin-bottom: 5px;
        }

        ul {
          display: flex;
          flex-direction: column;
          margin-left: -40px;

          li {
            cursor: pointer;
            margin: 5px 0;
            width: fit-content;
          }
        }

        @media (max-width: 1000px) {
          flex: 0 0 calc(33.333% - 20px) !important; 
        }

        @media (max-width: 800px) {
          flex: 0 0 calc(50% - 20px) !important; 
        }
        @media (max-width: 500px) {
          flex: 0 0 calc(100% - 20px) !important; 
        }
    }
  }
</style>

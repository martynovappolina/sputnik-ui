<template>
  <div class="menu">
    <div class="logo" :style="{ backgroundImage: `url(${logoPath})` }" />
    <div class="items">
      <div v-for="item in items" :key="item.text" class="item" @mouseover="submenuIsVisible = item">
        <div class="item-text">{{ item.text }}</div>
        <div v-if="item.submenu && submenuIsVisible === item" class="submenu" @click.stop>
          <div v-for="subitem in item.submenu" :key="subitem.text" class="item">
            <div class='item-text'>{{ subitem.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',  
  props: {  
    items: {  
      type: Array,  
      required: true  
    },
    logoPath: {
      type: String,
      default: require('@/assets/icons/logo.svg')
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSubmenu);
  },
  unmounted() {
    document.removeEventListener('click', this.hideSubmenu);
  },
  data() {
    return {
      submenuIsVisible: null
    }
  },
  methods: {  
    hideSubmenu() {
      this.submenuIsVisible = null;
    }
  }
};
</script>

<style lang='scss'>  
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $menu-background;
    color: $dark;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    .logo {
      width: 130px;
      height: 30px;
      background-image: url('~@/assets/icons/logo.svg');
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }

    .items {
      display: flex;

      .item {
        cursor: pointer;
        position: relative;
        margin-left: 40px;

        &-text {
          color: $dark;

          &:hover {
            color: $secondary;
          }
        }
      }

      .submenu {
        position: absolute;
        top: 70px;
        left: -50%;
        background-color: $menu-background;
        padding: 20px 30px;
        border-radius: 5px;

        .item {
          margin: 25px 0;
        }
      }
    }
  }
</style>


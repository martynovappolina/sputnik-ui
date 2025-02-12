<template>
  <div class="menu">
    <div class="logo" :style="{ backgroundImage: `url(${logoPath})` }" @click="goToPath('/')" />
    <div v-if="windowWidth > 800 || menuIsOpen" class="items">
      <div v-for="item in items" :key="item.text" class="item" @click.stop @click="() => {goToPath(item.path); showSubmenu(item)}">
        <div class="item-text">{{ item.text }}</div>
        <div v-if="item.submenu && item === activeSubmenu" class="submenu" @click.stop>
          <div v-for="subitem in item.submenu" :key="subitem.text" @click="goToPath(subitem.path)" class="item">
            <div class='item-text'>{{ subitem.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="windowWidth <= 800" class="burger" @click="toggleMenu" :class="{ open: menuIsOpen }"></div>
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
    data() {
      return {
        activeSubmenu: null,
        menuIsOpen: false,
        windowWidth: window.innerWidth
      };
    },
    mounted() {
      document.addEventListener('click', this.hideSubmenu);
      window.addEventListener('resize', this.updateWindowWidth);
    },
    unmounted() {
      document.removeEventListener('click', this.hideSubmenu);
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    methods: {
      hideSubmenu() {
        this.activeSubmenu = null;
      },
      showSubmenu(item) {
        this.activeSubmenu = item;
      },
      goToPath(path) {
        if (path) {
          window.location.href = path;
        }
      },
      toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
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

    .burger {
      width: 30px;
      height: 30px;
      background-image: url('~@/assets/icons/menu.svg');
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      transition: background-image 0.2s ease;

      &.open {
        background-image: url('~@/assets/icons/close.svg');
      }
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

    @media (max-width: 800px) {
      .items {
        flex-direction: column;
        padding-top: 50px;
        transition: all 0.3s ease;

        .item {
          margin: 20px 0;
        }

        .submenu {
          position: static;
          padding: 0;
        }
      }
    }
  }
</style>


<template>
  <div v-if="windowWidth > 800" class="menu">
    <div class="logo" :style="{ backgroundImage: `url(${logoIconPath})` }" @click="onClickLogo" />
    <div class="items">
      <div v-for="item in items" :key="item.text" class="item" @click.stop="onItemClick(item)">
        <div class="item-text">{{ item.text }}</div>
        <div v-if="item.submenu && item === activeSubmenu" class="submenu" @click.stop>
          <div v-for="subitem in item.submenu" :key="subitem.text" @click="subitem.onClick" class="item">
            <div class='item-text'>{{ subitem.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="windowWidth <= 800" class="menu">
    <div class="menu-row">
      <div class="logo" :style="{ backgroundImage: `url(${logoIconPath})` }" @click="onClickLogo" />
      <div class="burger" @click="toggleMenu" :class="{ open: menuIsOpen }"></div>
    </div>
    
    <div v-if="menuIsOpen">
      <div v-if="!activeSubmenu" class="items">
        <div v-for="item in items" :key="item.text" class="item" @click.stop="onItemClick(item)">
          <div class="item-text">{{ item.text }}</div>
        </div>
      </div>
      <div v-for="item in items" :key="item.text">
        <div v-if="item.submenu && item === activeSubmenu" class="submenu">
          <div v-for="subitem in item.submenu" :key="subitem.text" class="item" @click="subitem.onClick">
            <div class='item-text'>{{ subitem.text }}</div>
          </div>
          <div class="item-text" @click="activeSubmenu=null">Вернуться к основному меню</div>
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
      logoIconPath: {
        type: String,
        default: require('@/assets/icons/logo.svg')
      },
      onClickLogo: {
        type: Function,
        default: () => window.location.href = '/'
      },
    },
    data() {
      return {
        activeSubmenu: null,
        menuIsOpen: false,
        windowWidth: window.innerWidth
      };
    },
    mounted() {
      document.addEventListener('click', this.hideSubmenuWhenClickingOnDocument)
      window.addEventListener('resize', this.updateWindowWidth);
    },
    unmounted() {
      document.removeEventListener('click', this.hideSubmenuWhenClickingOnDocument);
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    methods: {
      hideSubmenuWhenClickingOnDocument() {
        if (this.windowWidth > 800) this.activeSubmenu = null;
      },
      showSubmenu(item) {
        this.activeSubmenu = item;
      },
      toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
      onItemClick(item) {
        item.onClick ? item.onClick() : this.showSubmenu(item)
      }
    }
  };
</script>

<style lang='scss' scoped>  
  .menu {
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    background-color: $menu-background;
    color: $dark;
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

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
    }

    .item {
      position: relative;
      margin-left: 40px;

      &-text {
        cursor: pointer;
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
  .menu {
    padding: 30px;
    display: block;
    
    &-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }


    .item {
      margin: 20px 0;
    }
    
    .items, .submenu {
      flex-direction: column;
      position: static;
      width: 100%;
      transition: all 0.3s ease;
      padding: 50px 0;
      text-align: center;
    }
  }
}

@media (max-width: 400px) {
  .menu {
    .logo {
      width: 150px;
      height: 50px;
      background-size: contain;
    }

    .burger, .burger.open {
      height: 50px;
      width: 50px;
    }
  }
}
</style>


<template>
  <div v-if="windowWidth > 800" class="menu">
    <div class="logo" :style="{ backgroundImage: `url(${logoIconPath})` }" @click="onClickLogo" />
    <div class="items">
      <div v-for="(item, index) in items" :key="item.text" class="item" @click.stop="onItemClick(index)">
        <div @click="activeSubmenu=null" class="item-text">{{ item.text }}</div>
        <div v-if="item.submenu && JSON.stringify(item) === JSON.stringify(items[activeSubmenu])" class="submenu" @click.stop>
          <div v-for="subitem in item.submenu" :key="subitem.text" @click="subitem.onClick" class="item">
            <div @click="activeSubmenu=null" class='item-text'>{{ subitem.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="windowWidth <= 800" class="menu">
    <div class="menu-row">
      <div class="logo" :style="{ backgroundImage: `url(${logoIconPath})` }" @click="onClickLogo" />
      <div class="burger" :style="{ backgroundImage: menuIsOpen? `url(${closeLogoPath})`:`url(${menuLogoPath})` }" @click="toggleMenu"></div>
    </div>
    
    <div v-if="menuIsOpen">
      <div v-if="activeSubmenu == null" class="items">
        <div v-for="(item, index) in items" :key="item.text" class="item" @click.stop="onItemClick(index)">
          <div class="item-text">{{ item.text }}</div>
        </div>
      </div>
      <div v-for="(item, index) in items" :key="item.text">
        <div v-if="item.submenu && index === activeSubmenu" class="submenu">
          <div v-for="subitem in item.submenu" :key="subitem.text" class="item" @click="subitem.onClick">
            <div @click="activeSubmenu=null; menuIsOpen=false" class='item-text'>{{ subitem.text }}</div>
          </div>
          <div class="item-text" @click="activeSubmenu=null">Вернуться к основному меню</div>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 90px"></div>
</template>

<script>
  import defaultLogoIconPath from '../assets/icons/logo.svg';
  import menuLogoPath from '../assets/icons/menu.svg';
  import closeLogoPath from '../assets/icons/close.svg';
  
  export default {
    name: 'MainMenu',  
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
          { text: 'Пункт 4', onClick: () => window.location.href = '/punkt4' }
        ]
      },
      logoIconPath: {
        type: String,
        default: defaultLogoIconPath
      },
      onClickLogo: {
        type: Function,
        default: () => window.location.href = '/'
      },
    },
    data() {
      return {
        menuLogoPath: menuLogoPath,
        closeLogoPath: closeLogoPath,
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
      showSubmenu(index) {
        this.activeSubmenu = index;
      },
      toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
      onItemClick(index) {
        const item = this.items[index];
        item.onClick ? item.onClick() : this.showSubmenu(index);
      }
    }
  };
</script>

<style lang='scss' scoped>
  @import '../assets/styles/variables.scss';

  .menu {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    background-color: $menu-background;
    color: $dark;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .logo {
      width: 130px;
      height: 30px;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }

    .burger {
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      transition: background-image 0.2s ease;
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
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      .item {
        margin: 25px 0;
      }
    }
  }

  @media (max-width: 800px) {
  .menu {
    display: block;
    
    &-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }


    .item {
      margin: 20px 0;
    }

    .submenu {
      box-shadow: none;
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


## Menu - Меню
Компонент, отображающий меню.  
![alt text](docs-images/menu.png)
### Входные данные
* `items` - массив пунктов меню
  * `text` - текст пункта меню
  * `onClick` - функция, вызываемая при клике на пункт
  * `submenu` - (опционально) массив подменю, где каждый элемент имеет ту же структуру, что и `items`
* `logoIconPath` - путь к иконке логотипа
* `onClickLogo` - функция, вызываемая при клике на логотип

### Пример использования
```
<template>
  <Page>
    <Menu
      :items="menuItems"
      :logoIconPath="require('@/assets/icons/logo.svg')"
      :onClickLogo="onClickLogo"
    />
  </Page>
</template>

<script>
  import { Menu, Page } from 'sputnik-ui/src/index';
  export default {
    components: { Menu, Page },
    data() {
      return {
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
```
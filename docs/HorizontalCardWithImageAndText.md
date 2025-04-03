## HorizontalCardWithImageAndText - Горизонтальная карточка с картинкой и текстом
Компонент, отображающий карточку с заголовком, текстом и изображением, которое может быть расположено слева или справа.
![alt text](docs-images/horizontalCardWithImageAndText.png)

### Входные данные

* `item` - объект, содержащий данные для отображения:
  * `imagePath` - путь к изображению
  * `header` - заголовок
  * `text` - текст
  * `imagePosition` - позиция изображения ('left' или 'right')
  * `onClick` - функция, вызываемая при клике на карточку

### Пример использования

```
<template>
  <Page>
    <HorizontalCardWithImageAndText :item="{
      imagePath: require('@/assets/imgs/project.png'),
      header: 'Проект',
      text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
      imagePosition: 'right',
      onClick: handleCardClick
    }" />
  </Page>
</template>

<script>
  import { HorizontalCardWithImageAndText, Page } from 'sputnik-ui/src/index';
  export default {
    components: { HorizontalCardWithImageAndText, Page },
    methods: {
        handleCardClick() {
            // обработка клика по карточке
        }
    }
  }
</script>
```
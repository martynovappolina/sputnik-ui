# sputnik-ui
## Описание 
Библиотека sputnik-ui - это набор готовых к использованию компонентов, собранных в одном месте, для упрощения и ускорения процесса создания лендингов, сайтов-визиток и других веб-страниц.  
Входные данные всех компонентов заполнены по умолчанию.

## Установка библиотеки

## Компоненты
### Menu - Меню
Компонент, отображающий меню.  
![alt text](docs-images/menu.png)
#### Входные данные
* `items` - массив пунктов меню
  * `text` - текст пункта меню
  * `onClick` - функция, вызываемая при клике на пункт
  * `submenu` - (опционально) массив подменю, где каждый элемент имеет ту же структуру, что и `items`
* `logoIconPath` - путь к иконке логотипа
* `onClickLogo` - функция, вызываемая при клике на логотип

#### Пример использования
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
  export default {
    name: 'App',
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


### CoverWithText - Обложка
Компонент, отображающий картинку на заднем плане и заголовок с текстом на переднем плане.
![alt text](docs-images/cover.png)

#### Входные данные

* `backgroundImagePath` - путь к картинке на заднем плане
* `header` - заголовок
* `text` - текст

#### Пример использования
`<Cover :backgroundImagePath="require('@/assets/imgs/cover.png')" header="Заголовок" text="Текст" />`


### HorizontalCardWithImageAndText - Горизонтальная карточка с картинкой и текстом
Компонент, отображающий карточку с заголовком, текстом и изображением, которое может быть расположено слева или справа.
![alt text](/docs-images/horizontalCardWithImageAndText.png)

#### Входные данные

* `item` - объект, содержащий данные для отображения:
  * `imagePath` - путь к изображению
  * `header` - заголовок
  * `text` - текст
  * `imagePosition` - позиция изображения ('left' или 'right')
  * `onClick` - функция, вызываемая при клике на карточку

#### Пример использования

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
    export default {
        name: 'App',
        methods: {
            handleCardClick() {
                // обработка клика по карточке
            }
        }
    }
</script>
```


### HorizontalCardsBlock - Блок с горизонтальными карточками
Компонент, отображающий несколько `HorizontalCardWithImageAndText` в виде блока.
![alt text](/docs-images/horizontalCardsBlock.png)

#### Входные данные

* `items` - массив объектов, содержащих данные для отображения:
  * `imagePath` - путь к изображению
  * `header` - заголовок
  * `text` - текст
  * `imagePosition` - позиция изображения ('left' или 'right')
  * `onClick` - функция, вызываемая при клике на карточку

#### Пример использования
```
    <template>
        <Page>
            <HorizontalCardsBlock :items="horizontalCardsBlockItems" />
        </Page>
    </template>

    <script>
    export default {
        name: 'App',
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
            };
        },
    }
    </script>
```

<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <h2>{{ title }}</h2>
        <div v-for="item in items" :key="item.title" class="horizontal-block-with-picture-title-and-text">
            <div class="image" :style="{ backgroundImage: `url(${item.imagePath})` }"></div>
            <div class="text-block">
                <h3>{{ item.title }}</h3>
                <h4>{{ item.subtitle }}</h4>
                <p>{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import defaultImage1 from '../assets/imgs/project.png';
    import defaultImage2 from '../assets/imgs/project2.png';
    import defaultImage3 from '../assets/imgs/project3.png';

    export default {
        name: 'HorizontalBlocksWithPictureTitleAndText',
        props: {
            items: {
                type: Array,
                default: () => ([
                    {
                        imagePath: defaultImage1,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage2,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage3,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage3,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage2,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage1,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage2,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    },
                    {
                        imagePath: defaultImage3,
                        title: 'Имя партнера',
                        subtitle: 'Фамилия партнера',
                        text: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                    }
                ]),
            },
            title: {
                type: String,
                default: 'Это наши партнеры'
            },
            theme: {
                type: String,
                default: 'light'
            }
        }
    }    
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    h2 {
        text-align: center;
        color: $primary;
    }

    .horizontal-block-with-picture-title-and-text {
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        margin-bottom: 50px;
        
        .image {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            min-width: 300px;
            min-height: 300px;
            margin-right: 30px;
        }

        h3 {
            color: $secondary;
            margin-bottom: 0;
        }

        h4 {
            color: $secondary2;
            margin-top: 10px;
        }
    }

    @media (max-width: 650px) {
        .horizontal-block-with-picture-title-and-text {
            flex-direction: column;

            .text-block {
                text-align: center;
            }

            .image {
                margin: 0;
            }
        }
    }

    @media (max-width: 400px) {
        .horizontal-block-with-picture-title-and-text { 
            .image {
                width: 100%;
            }
        }
    }
</style>
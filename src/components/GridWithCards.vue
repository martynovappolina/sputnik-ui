<template>
    <div class="grid-with-cards">
        <h2>{{ title }}</h2>
        <div class="items">
            <div v-for="item in items" :key="item.header" class="item">
                <div class="image" :style="{ backgroundImage: `url(${item.imagePath})` }"></div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <a :href="item.link" target="_blank">{{ item.linkName }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GridWithCards',
        props: {
            title: {
                type: String,
                default: 'Это наши партнеры'
            },
            items: {
                type: Array,
                default: () => [
                    {
                        imagePath: require('@/assets/imgs/project2.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test1.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test2.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project3.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test3.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project3.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test4.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project2.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test5.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test6.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project2.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test7.com',
                        linkName: 'Ссылка на партнера'
                    },
                    {
                        imagePath: require('@/assets/imgs/project3.png'),
                        title: 'Имя партнера',
                        description: 'Партнер — это человек или организация, с которой у вас есть взаимовыгодные отношения, основанные на сотрудничестве, доверии и общей цели. ',
                        link: 'http://test8.com',
                        linkName: 'Ссылка на партнера'
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid-with-cards {
        padding: 30px;
        margin: 150px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1200px;

        h2 {
            color: $primary;
        }

        h3 {
            color: $secondary;
        }

        .items {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .item {
                flex: 0 0 calc(25% - 20px);
                margin: 50px 10px;

                .image {
                    width: 100%;
                    height: 300px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                @media (max-width: 1300px) {
                    flex: 0 0 calc(33.333% - 20px);
                }

                @media (max-width: 1150px) {
                    flex: 0 0 calc(50% - 20px);
                }

                @media (max-width: 700px) {
                    flex: 0 0 calc(100% - 60px);
                }
            }
        }
    }
</style>

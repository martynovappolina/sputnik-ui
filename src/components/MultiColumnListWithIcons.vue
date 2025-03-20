<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <div class="multi-column-list-with-icons">
            <h2>{{ header }}</h2>
            <p class="description">{{ text }}</p>
            <div class="items">
                <div v-for="item in items" :key="item.header" class="item">
                    <div class="header-line">
                        <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }" />
                        <h3>{{ item.header }}</h3>
                    </div>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import defaultStarIcon from '../assets/icons/star.svg';

    export default {
        name: 'MultiColumnListWithIcons',
        props: {
            header: {
                type: String,
                default: 'Преимущества'
            },
            text: {
                type: String,
                default: 'Мы усердно работаем каждый день, чтобы сделать жизнь наших клиентов лучше и счастливее.'
            },
            items: {
                type: Array,
                default() {
                    return [
                    {
                            icon: defaultStarIcon,
                            header: 'Преимущество 1',
                            text: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: defaultStarIcon,
                            header: 'Преимущество 2',
                            text: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: defaultStarIcon,
                            header: 'Преимущество 3',
                            text: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: defaultStarIcon,
                            header: 'Преимущество 4',
                            text: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: defaultStarIcon,
                            header: 'Преимущество 5',
                            text: 'Преимущество — это положительная черта, качество или характеристика'
                        },
                        {
                            icon: defaultStarIcon,
                            header: 'Преимущество 6',
                            text: 'Преимущество — это положительная черта, качество или характеристика'
                        },
                    ]
                }
            },
            theme: {
                type: String,
                default: 'light'
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';

    .multi-column-list-with-icons {
        margin: 0 auto;
        max-width: 1200px;

        h2 {
            color: $primary;
        }

        h2, .description {
            text-align: center;
        }

        .items {
            display: flex;
            flex-wrap: wrap;
            
            .item {
                flex: 0 0 calc(33.333% - 80px);
                margin: 50px 30px;

                p {
                    text-align: center;
                }

                @media (max-width: 1200px) {
                    flex: 0 0 calc(50% - 80px);
                }

                @media (max-width: 850px) {
                    flex: 0 0 calc(100% - 80px);
                }
            }

            .header-line {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 20px;

                h3 {
                    color: $secondary;
                    text-align: center;
                }

                .icon {
                    width: 50px;
                    height: 50px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
        }
    }
</style>

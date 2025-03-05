<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <div class="multi-column-list-with-icons">
            <h2>{{ header }}</h2>
            <p class="description">{{ description }}</p>
            <div class="items">
                <div v-for="item in items" :key="item.header" class="item">
                    <div class="header-line">
                        <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }" />
                        <h3>{{ item.header }}</h3>
                    </div>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MultiColumnListWithIcons',
        props: {
            header: {
                type: String,
                default: 'Преимущества'
            },
            description: {
                type: String,
                default: 'Мы усердно работаем каждый день, чтобы сделать жизнь наших клиентов лучше и счастливее.'
            },
            items: {
                type: Array,
                default() {
                    return [
                        {
                            icon: require('@/assets/icons/star.svg'),
                            header: 'Преимущество 1',
                            description: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: require('@/assets/icons/star.svg'),
                            header: 'Преимущество 2',
                            description: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: require('@/assets/icons/star.svg'),
                            header: 'Преимущество 3',
                            description: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: require('@/assets/icons/star.svg'),
                            header: 'Преимущество 4',
                            description: 'Преимущество — это положительная черта, качество или характеристика.'
                        },
                        {
                            icon: require('@/assets/icons/star.svg'),
                            header: 'Преимущество 5',
                            description: 'Преимущество — это положительная черта, качество или характеристика'
                        },
                        {
                            icon: require('@/assets/icons/star.svg'),
                            header: 'Преимущество 6',
                            description: 'Преимущество — это положительная черта, качество или характеристика'
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
                flex: 0 0 calc(33.333% - 60px);
                margin: 50px 30px;

                @media (max-width: 1200px) {
                    flex: 0 0 calc(50% - 60px);
                }

                @media (max-width: 850px) {
                    flex: 0 0 calc(100% - 60px);
                }
            }

            .header-line {
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                h3 {
                    color: $secondary;
                }

                .icon {
                    width: 50px;
                    height: 50px;
                    margin-right: 20px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
        }
    }
</style>

<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <div class="list">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="item in items" :key="item.text" :class="{ link: item.onClick }">
                    {{ item.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListComponent',
        props: {
            title: {
                type: String,
                default: 'Список'
            },
            items: {
                type: Array,
                default: () => [
                    { text: 'Экономически эффективное использование ресурсов' },
                    { text: 'Совершенствование процессов управления', onClick: () => {} },
                    { text: 'Увеличение производительности и качества услуг', onClick: () => {} },
                ]
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
    .list {
        max-width: 600px;
        min-height: calc(100vh - 290px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;

        h2 {
            text-align: center;
            color: $primary;
        }
        ul {
            list-style: none;
        }
        li {
            display: flex;
            align-items: center;
            padding-bottom: 30px;
            &::before {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: $primary;
                margin-right: 10px;
            }
        }
        .link {
            cursor: pointer;

            &:hover {
                color: $secondary;
            }
        }
    }
</style>
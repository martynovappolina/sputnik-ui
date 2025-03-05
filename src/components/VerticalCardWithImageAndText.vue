<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <div class="card">
            <h2>{{ header }}</h2>
            <div class="image" :style="{ backgroundImage: `url(${imagePath})` }"></div>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VerticalCardWithImageAndText',
        props: {
            imagePath: {
                type: String,
                default: require('@/assets/imgs/main-project.png')
            },
            header: {
                type: String,
                default: 'Это наш проект'
            },
            text: {
                type: String,
                default: 'В этот день солнце светило ярко. По утрам птицы пели, а ветер играл с листьями. Дети радостно бегали по парку, улыбаясь друг другу. Напротив качелей стояла девушка с книгой. '
            },
            theme: {
                type: String,
                default: 'light'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;

        h2 {
            color: $primary;
        }

        .image {
            width: 100%;
            max-width: 600px;
            height: 400px;
            margin: 50px 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>


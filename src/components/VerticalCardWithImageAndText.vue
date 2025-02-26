<template>
    <div class="card">
        <h1>{{ item.header }}</h1>
        <div class="image" :style="{ backgroundImage: `url(${item.imagePath})` }"></div>
        <p>{{ item.text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'VerticalCardWithImageAndText',
        props: {
            item: {
                type: Object,
                default: () => ({
                    imagePath: require('@/assets/imgs/main-project.png'),
                    header: 'Это наш проект',
                    text: 'В этот день солнце светило ярко. По утрам птицы пели, а ветер играл с листьями. Дети радостно бегали по парку, улыбаясь друг другу. Напротив качелей стояла девушка с книгой. Она погрузилась в читательский мир и не замечала окружающих. На скамейке сидел старик, вспоминая молодость. Он наблюдал за играющими детьми и улыбался. Вдалеке раздавалось весёлое волнение. Собака весело скакала за мячом. Радость заполняла воздух, а мир казался идеальным. Время летело незаметно, и каждый находил свои моменты счастья в этом безмятежном окружающем мире.',
                })
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
        padding: 0 30px;
        max-width: 1200px;
        margin: 150px auto;
        color: $dark;

        h1 {
            color: $primary;
        }

        .image {
            width: 100%;
            max-width: 800px;
            height: 500px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>


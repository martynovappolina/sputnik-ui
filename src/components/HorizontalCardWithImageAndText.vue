<template>
    <div class="card" @click="item.onClick">
        <div class="image" :style="{
            display: item.imagePosition == 'left'? 'block': 'none',
            backgroundImage: `url(${item.imagePath})` 
        }" />
        <div class="text-block">
            <h2>{{ item.header }}</h2>
            <p>{{ item.text }}</p>
        </div>
        <div class="image" :style="{
            display: item.imagePosition == 'right'? 'block': 'none',
            backgroundImage: `url(${item.imagePath})` 
        }" />
    </div>
</template>

<script>
    export default {
        name: 'HorizontalCardWithImageAndText',
        props: { 
            item: {
                type: Object,
                default: () => ({
                    imagePath: require('@/assets/imgs/project.png'),
                    header: 'Проект',
                    text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                    imagePosition: 'right',
                    onClick: () => {}
                }),

            }
        },
    }
    
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        max-width: 1000px;
        height: 350px;
        margin: 0 auto;
        cursor: pointer;

        .text-block, .image {
            width: 50%;
            height: 100%;
        }

        .text-block {
            background-color: $primary;
            color: $light;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px;
            box-sizing: border-box;
        }

        .image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
    
    @media (max-width: 800px) {
    .card {
        flex-direction: column;
        height: 1000px;
        
        .text-block, .image {
            width: 100%;
            height: 50%;
        }

        .image {
            &:first-child {
                display: block !important;
            }
            &:last-child {
                display: none !important;
            }
        }
    }
}
</style>
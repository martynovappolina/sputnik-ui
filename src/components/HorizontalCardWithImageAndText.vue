<template>
    <div class="card" @click="item.onClick">
        <div class="image" :style="{
            display: item.imagePosition == 'left'? 'block': 'none',
            backgroundImage: `url(${item.imagePath})` 
        }" />
        <div class="text-block">
            <h3>{{ item.header }}</h3>
            <p>{{ item.text }}</p>
        </div>
        <div class="image" :style="{
            display: item.imagePosition == 'right'? 'block': 'none',
            backgroundImage: `url(${item.imagePath})` 
        }" />
    </div>
</template>

<script>
    import defaultCoverImage from '../assets/imgs/project.png';

    export default {
        name: 'HorizontalCardWithImageAndText',
        props: { 
            item: {
                type: Object,
                default: () => ({
                    imagePath: defaultCoverImage,
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
    @import '../assets/styles/variables.scss';

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

            &:hover {
                background-color: $primary-transparent;
                transition: all .2s ease-in-out;
            }
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
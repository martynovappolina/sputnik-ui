<template>
    <div class="cover-wrapper" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
        <div class="cover">
            <h1 class="header">{{ header }}</h1>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    import defaultCoverImage from '../assets/imgs/cover.png';
    export default {
        name: 'CoverWithText',  
        props: {  
            backgroundImagePath: {
                type: String,
                default: defaultCoverImage
            },
            header: {
                type: String,
                default: 'Заголовок'
            },
            text: {
                type: String,
                default: 'Тут какой-то информационный текст. Тут какой-то информационный текст. Тут какой-то информационный текст. Тут какой-то информационный текст. Тут какой-то информационный текст. Тут какой-то информационный текст. ' 
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    
    .cover {
        position: absolute;
        background-color: $primary-transparent;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $light;
        text-align: center;
        box-sizing: border-box;
        padding: 50px;

        &-wrapper {
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            width: 100%;
        }

        .header, .text {
            max-width: 800px;
        }
    }

    @media (max-width: 400px) {
        .cover {
            padding: 30px;
        }
    }
</style>
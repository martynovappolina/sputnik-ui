<template>
    <div class="cover-wrapper" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
        <div class="cover">
            <h1 class="header">{{ header }}</h1>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CoverWithText',  
        props: {  
            backgroundImagePath: {
                type: String,
                default: require('@/assets/imgs/cover.png')
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
    .cover {
        position: absolute;
        background-color: $primary-transparent;
        width: 100%;
        height: 100%;
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
            height: 800px;
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
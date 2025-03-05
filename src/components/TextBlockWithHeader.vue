<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <div class="text-block-with-header">
            <h2>{{ header }}</h2>
            <p v-html="text" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextBlockWithHeader',
    props: {
        header: {
            type: String,
            default: 'Заголовок'
        },
        text: {
            type: String,
            default: 'Текстовый блок с заголовком — это структурный элемент, состоящий из двух частей: заголовка и основного текста. Заголовок обычно выделяется более крупным шрифтом или другим стилем, чтобы привлечь внимание читателя и кратко излагать суть содержания блока. Основной текст предоставляет более подробную информацию, объяснение или описание темы, обозначенной заголовком.'
        },
        theme: {
            type: String,
            default: 'light'
        }
    }
}
</script>

<style lang="scss" scoped>  
    .text-block-with-header {
        max-width: 1200px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;

        h2 {
            color: $primary;
        }
    }
</style>


<template>
    <div class="cards">
        <CardWithImageAndText v-for="item in items" :item="item" :key="item.header" />
    </div>
</template>

<script>
    import CardWithImageAndText from './CardWithImageAndText.vue';

    export default {
        name: 'CardsBlock',
        components: {
            CardWithImageAndText
        },
        props: {  
            items: {
                type: Array,  
                default: () => [
                    {
                        imagePath: require('@/assets/imgs/project.png'),
                        header: 'Проект',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'right',
                        onClick: () => {}
                    },
                    {
                        imagePath: require('@/assets/imgs/project2.png'),
                        header: 'Проект 2',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'left',
                        onClick: () => {}
                    },
                    {
                        imagePath: require('@/assets/imgs/project3.png'),
                        header: 'Проект 3',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'right',
                        onClick: () => {}
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .cards {
        margin: 150px 30px;
    }
</style>

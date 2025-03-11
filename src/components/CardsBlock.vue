<template>
    <div class="cards">
        <CardWithImageAndText v-for="item in items" :item="item" :key="item.header" />
    </div>
</template>

<script>
    import CardWithImageAndText from './CardWithImageAndText.vue';
    import project1 from '../assets/imgs/project.png';
    import project2 from '../assets/imgs/project2.png';
    import project3 from '../assets/imgs/project3.png';

    export default {
        name: 'CardsBlock',
        components: {
            CardWithImageAndText
        },
        props: {  
            items: {
                type: Array,  
                required: true,  
                default: () => [
                    {
                        imagePath: project1,
                        header: 'Проект',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'right',
                        onClick: () => {}
                    },
                    {
                        imagePath: project2,
                        header: 'Проект 2',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'left',
                        onClick: () => {}
                    },
                    {
                        imagePath: project3,
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
    @import '../assets/styles/variables.scss';

    .cards {
        margin: 150px 30px;
    }
</style>

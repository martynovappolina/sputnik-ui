<template>
    <div class="wrapper">
        <HorizontalCardWithImageAndText v-for="item in items" :item="item" :key="item.header" />
    </div>
</template>

<script>
    import HorizontalCardWithImageAndText from './HorizontalCardWithImageAndText.vue';

    export default {
        name: 'CardsBlock',
        components: {
            HorizontalCardWithImageAndText
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


<template>
    <div class="wrapper">
        <HorizontalCardWithImageAndText v-for="item in items" :item="item" :key="item.header" />
    </div>
</template>

<script>
    import HorizontalCardWithImageAndText from './HorizontalCardWithImageAndText.vue';
    import defaultCoverImage1 from '../assets/imgs/project.png';
    import defaultCoverImage2 from '../assets/imgs/project2.png';
    import defaultCoverImage3 from '../assets/imgs/project3.png';

    export default {
        name: 'HorizontalCardsBlock',
        components: {
            HorizontalCardWithImageAndText
        },
        props: {  
            items: {
                type: Array,  
                default: () => [
                    {
                        imagePath: defaultCoverImage1,
                        header: 'Проект',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'right',
                        onClick: () => {}
                    },
                    {
                        imagePath: defaultCoverImage2,
                        header: 'Проект 2',
                        text: 'Это наш проект. Это наш проект. Это наш проект. Это наш проект.',
                        imagePosition: 'left',
                        onClick: () => {}
                    },
                    {
                        imagePath: defaultCoverImage3,
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


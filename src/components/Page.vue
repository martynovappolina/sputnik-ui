<template>
    <div class="page">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'PageTemplate',
        props: {
            menu: {
                type: Object,
                required: true
            },
            footer: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang='scss' scoped>
    .page {
        @include text;
        
        h1 {
            @include h1;
        }
        h2 {
            @include h2;
        }

        @media (max-width: 400px) {
            @include big-text;
        }
    }
</style>
<template>
    <div class="page-template-sputnik-ui-kit">
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

<style lang='scss'>
    .page-template-sputnik-ui-kit {
        @include text;
        color: $dark;

        h1 {
            @include font;
            font-size: 52px;
        }

        h2 {
            @include font;
            font-size: 32px;
        }

        @media (max-width: 400px) {
            @include big-text;

            h1 {
                font-size: 40px;
            }
            h2 {
                font-size: 28px;
            }       
        }

    }
</style>
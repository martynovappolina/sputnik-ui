<template>
    <div class="page-template-sputnik-ui-kit">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'PageTemplate',
    }
</script>

<style lang='scss'>
    @import '../assets/styles/variables.scss';
    
    .page-template-sputnik-ui-kit {
        @include text;
        color: $dark;

        h1 {
            @include font;
            font-size: 72px;
        }

        h2 {
            @include font;
            font-size: 52px;
        }

        h3 {
            @include font;
            font-size: 32px;
        }

        a {
            color: $primary;

            &:hover {
                color: $secondary;
            }

            &:visited {
                color: $secondary2;
            }
        }

        .wrapper {
            padding: 150px 30px;
            width: 100%;
            min-height: 100vh;
            box-sizing: border-box;
        }

        @media (max-width: 400px) {
            @include big-text;

            h1 {
                font-size: 54px;
            }
            h2 {
                font-size: 40px;
            }       
            h3 {
                font-size: 28px;
            }       
        }

    }
</style>
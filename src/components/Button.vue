<template>
    <button @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'ButtonTemplate',
        props: {
            text: {
                type: String,
                default: 'Нажми на меня'
            }
        }
    }
</script>

<style lang="scss" scoped>
    button {
        @include text;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        background: $primary;
        color: $light;
        border-radius: 7px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: $secondary;
        }

        &:active {
            background: $secondary2;
        }
    }
</style>

<template>
    <div class="wrapper" :style="{ backgroundColor: theme === 'dark' ? '#eff6ff' : '' }">
        <div class="contacts">
            <h2>{{ title }}</h2>
            <h3>{{ subtitle }}</h3>
            <a class="telephoneNumber" :href="`tel:${telephoneNumber}`">{{ telephoneNumber }}</a>
            <a :href="`mailto:${email}`">{{ email }}</a>
            <div class="address">{{ address }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactsCard',
        props: {
            title: {
                type: String,
                default: 'Контакты'
            },
            subtitle: {
                type: String,
                default: 'ООО «ПП «Спутник»'
            },
            telephoneNumber: {
                type: String,
                default: '8 495 855-64-80'
            },
            email: {
                type: String,
                default: 'info@corp.sputnik.ru'
            },
            address: {
                type: String,
                default: '108811 г. Москва, п. Московский, 22-й километр Киевского шоссе, домовладение 6, стр. 1'
            },
            theme: {
                type: String,
                default: 'light'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';

    .contacts {
        text-align: center;
        margin: 0 auto;
        max-width: 450px;
        min-height: calc(100vh - 290px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        h3 {
            margin: 0;
        }

        .telephoneNumber {
            color: $dark;
            text-decoration: none;
            display: block;
            margin: 5px 0;
        }

        .address {
            @include small-text;
            margin-top: 50px;
        }

        @media (max-width: 400px) {
            .address {
                @include text;
            }
        }
    }
</style>
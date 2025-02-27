<template>
    <div class="stages" :style="{ height: items.length * 350 + 'px' }">
        <h2>{{title}}</h2>
        <div class="items">
            <div 
            v-for="(item, index) in items" :key="index"
            :style="{justifyContent: index %2 == 0? 'flex-end': 'flex-start'}"
            class="row">
                <div class="item">
                    <div 
                    :style="{
                        left: index %2 == 0 ? '' : 'calc(100% + 50px)',
                        right: index %2 == 0 ? 'calc(100% + 50px)' : ''
                    }"
                    class="circle">
                        <div :style="{ marginLeft: index === 0 ? '-5px' : '0px' }" class="number">{{index + 1}}</div>
                        <div v-if="index !== items.length - 1" class="line" />
                    </div>
                    <div 
                    :style="{textAlign: index %2 == 0? 'start': 'end'}"
                    class="content">
                        <h3>{{item.title}}</h3>
                        <p>{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StagesTemplate',
        props: {
            title: {  
                type: String,  
                default: 'Как это работает'
            },
            items: {  
                type: Array,  
                default: () => [
                    {
                        title: 'Название шага 1',
                        description: 'Шаг 1 можно воспринимать как начало путешествия, момент, когда человек принимает решение двигаться вперед. '
                    },
                    {
                        title: 'Название шага 2',
                        description: 'Шаг 2 — это процесс планирования, когда человек анализирует возможности и ресурсы, определяет необходимые действия и устанавливает временные рамки для достижения своих целей.'
                    },
                    {
                        title: 'Название шага 3',
                        description: 'Шаг 3 заключается в реализации намеченного плана, когда происходит активное действие и применение принятых решений на практике, позволяющее преобразовать идеи в конкретные результаты.'
                    },

                ]
            } 
        }
    }
</script>

<style lang="scss" scoped>
    .stages {
        padding: 30px;
        margin: 150px auto;
        width: calc(100% - 60px);
        max-width: 1160px;

        h2 {
            text-align: center;
            color: $primary;
            margin-bottom: 120px;
        }

        h3 {
            color: $secondary;
        }

        .items {
            width: 100%;

            .row {
                display: flex;
                width: 100%;
            }
            
            .item {
                height: 300px;
                position: relative;
                max-width: 450px;

                h3 {
                    margin-top: 0;
                }

                .circle {
                    position: absolute;
                    top: -30px;
                    width: 100px;
                    min-width: 100px;
                    height: 100px;
                    min-height: 100px;
                    max-height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background-color: $primary;
                    margin: 0 30px;

                    .number {
                        color: $light;
                        font-weight: 700;
                        font-size: 54px;
                    }

                    .line {
                        position: absolute;
                        height: 300px;
                        width: 3px;
                        background-color: $primary;
                        top: 100%;
                        left: 50%;
                    }
                }
            }
        }
    }
</style>
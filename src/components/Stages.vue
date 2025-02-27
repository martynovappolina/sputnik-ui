<template>
    <div class="stages">
        <h2>{{title}}</h2>
        <div class="items">
            <div v-for="(item, index) in items" :key="index" class="item">
                <div class="circle"><div :style="{ marginLeft: index === 0 ? '-5px' : '0px' }" class="number">{{index + 1}}</div></div>
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.description}}</p>
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
                        title: 'Шаг 1',
                        description: 'Шаг 1 можно воспринимать как начало путешествия, момент, когда человек принимает решение двигаться вперед. '
                    },
                    {
                        title: 'Шаг 2',
                        description: 'Шаг 2 — это процесс планирования, когда человек анализирует возможности и ресурсы, определяет необходимые действия и устанавливает временные рамки для достижения своих целей.'
                    },
                    {
                        title: 'Шаг 3',
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

        .items {
            .item {
                display: flex;
                max-width: 800px;
                height: 350px;

                h3 {
                    margin-top: 0;
                }

                .circle {
                    width: 100px;
                    min-width: 100px;
                    height: 100px;
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
                }
            }
        }
    }
</style>
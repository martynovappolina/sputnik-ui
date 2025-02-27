<template>  
  <div class="numbered-list">  
    <h2>{{ title }}</h2>  
    <p class="description">{{ description }}</p>  
    <ol>  
      <li v-for="(item, index) in list" :key="index" class="item">  
        <div class="circle">
          <div :style="{ marginLeft: index === 0 ? '-5px' : '0px' }" class="number">{{ index + 1 }}</div> 
        </div>
        <div class="content">  
          <h3>{{ item.title }}</h3>  
          <p>{{ item.description }}</p>  
        </div>  
      </li>  
    </ol>  
  </div>  
</template>  

<script>  
  export default {  
    name: 'NumberedList',  
    props: {  
      title: {  
        type: String,  
        default: 'Преимущества'
      },  
      description: {  
        type: String,  
        default: 'Мы усердно работаем каждый день, чтобы сделать жизнь наших клиентов лучше и счастливее.'
      },  
      list: {  
        type: Array,  
        default: () => [
          {
              title: 'Преимущество',
              description: 'Преимущество — это положительная черта, качество или характеристика, которые ставят объект в более выгодное положение по сравнению с другими.'
          },
          {
              title: 'Преимущество',
              description: 'Преимущество — это положительная черта, качество или характеристика, которые ставят объект в более выгодное положение по сравнению с другими.'
          },
          {
              title: 'Преимущество',
              description: 'Преимущество — это положительная черта, качество или характеристика, которые ставят объект в более выгодное положение по сравнению с другими.'
          },
        ]
      }  
    }  
  }  
</script>  

<style lang='scss' scoped>  
  .numbered-list {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px auto;

    ol {
      padding: 0;
    }

    h2 {
      color: $primary;
    }

    .description {
      text-align: center;
    }

    .item {  
      display: flex;  
      align-items: center;  
      margin: 10px 0;
      max-width: 800px;

      h3 {
        color: $secondary;
      }

      .circle {
        border-radius: 50%;
        border: solid 2px $primary;
        width: 100px;
        min-width: 100px;
        height: 100px;  
        display: flex;  
        align-items: center;  
        justify-content: center;  
        margin-right: 50px;  
      }

      .number {    
        color: $primary;
        font-weight: 700;
        font-size: 52px;
      }   
    }  
  }   

  @media (max-width: 800px) {
      .numbered-list {
          .item {
            .circle {
              margin-right: 30px;
              height: 60px;
              width: 60px;
              min-width: 60px;
            }
            .number {
              font-size: 40px;
            }
          }
      }
  }

  @media (max-width: 500px) {
      .numbered-list {
          .item {
            flex-direction: column;
            text-align: center;

            .circle {
              margin-right: 0;
              margin-top: 80px;
              height: 70px;
              width: 70px;
              min-width: 70px;
            }
          }
      }
  }
</style>  
<template>
  <div class="row"  v-wechat-title="$route.meta.title">
    <div class="col-sm-2 ml-md-auto">
      <img src="../assets/logo.png"/>
    </div>
    <div class="col-md-9 ml-md-auto">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    data () {
      return {
        msg: '北京农合金融服务'
      }
    }
  }
</script>

<style scoped>
  img{
    width: 80%;}
  h1{
    line-height: 120px;
    font-size: 50px;
  }
  .row{
    border-bottom: 1px solid #000;
  }
</style>

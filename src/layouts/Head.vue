<template>
  <div class="row"  v-wechat-title="$route.meta.title">
    <div class="col-sm-2 ml-md-auto">
      <img src="../assets/logo.png"/>
    </div>
    <div class="col-md-9 ml-md-auto">
      <h3>{{msg}}</h3>
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
  .row{
    border-bottom: 1px solid #000;
  }
  img{
    width: 40px;
  }
</style>

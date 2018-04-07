<template>
  <b-container class="bv-example-row" v-wechat-title="$route.meta.title">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="auto">
        <h3><img src="../assets/logo.png"/>{{msg}}</h3>
      </b-col>
    </b-row>
  </b-container>
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
    width: 38px;
    margin-right: 10px;
    vertical-align: -25%;
  }
</style>

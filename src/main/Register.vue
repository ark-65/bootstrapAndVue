<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container center-vertical">
    <div class="row justify-content-md-center padding-tb-1">
      <label class="col-sm-3">用户名：</label>
      <input type="text" class="col-sm-6 form-control" v-model="username">
    </div>
    <div class="row justify-content-md-center padding-tb-1" >
      <label class="col-sm-3">手机号：</label>
      <input type="text" class="col-sm-6 form-control" v-model="telephone">
    </div>
    <div class="row justify-content-md-center padding-tb-1">
      <input type="text" class="col-sm-4 form-control" v-model="vercode" style="margin-right: 1em">
      <button v-on:click="getCode()" class="pull-right col-sm-4 btn btn-info">发送验证码{{count}}</button>
    </div>
    <div class="row justify-content-md-center padding-tb-1">
      <button v-on:click="res()" class="col-sm-2 btn btn-info">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        show: true,
        count: '',
        timer: null,
        code: '',
        vercode: '',
        username: '',
        telephone: '',
        path: ''
      }
    },
    methods: {
      getCode: function () {
        const phoneRex = /^1[345789][0-9]{9}/
        if (this.username === '') {
          alert('请输入用户名')
          return false
        } else if (!(phoneRex.test(this.telephone)) || this.telephone === '') {
          alert('手机号为空或者格式不正确')
          return false
        } else {
          const TIME_COUNT = 60
          if (this.show) {
            // this.$http.get('http://192.168.1.123:3000/getjson/test')
            this.$http.get('http://localhost:3000/getjson/test')
              .then((res) => {
                this.code = res.data.data.code
                alert('已发送验证码')
              }).catch((err) => {
                alert('信息发送失败' + err)
              })
          }
          this.show = false
          if (!this.timer) {
            this.count = TIME_COUNT
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.show = true
                clearInterval(this.timer)
                this.timer = null
                this.count = ''
              }
            }, 1000)
          }
        }
      },
      res: function () {
        if (this.vercode === this.code) {
          this.$http.get('http://localhost:3000/getjson/login')
            .then((res) => {
              this.$router.push(res.data.data.path)
            }).catch((err) => {
              alert('提交失败，请检查网络' + err)
            })
        } else {
          alert('验证码错误')
        }
      }
    }
}
</script>

<style scoped>

</style>

<template>
  <div class="container">
    <div class="row padding-tb-1">
      <div class="col-sm-6">
        <div role="group">
          <label for="inputLive" class="width-30">姓名:</label>
          <b-form-input style="width:60%;display:inline-block"
                        id="inputLive"
                        v-model.trim="name"
                        type="text"
                        :state="nameState"
                        aria-describedby="inputLiveHelp inputLiveFeedback"
                        placeholder="输入您的姓名"></b-form-input>
          <b-form-invalid-feedback class="sr-only" id="inputLiveFeedback">
            请输入您的真实姓名
          </b-form-invalid-feedback>
        </div>
      </div>
    </div>
    <div class="row padding-tb-1">
      <div class="col-sm-6">
        <div role="group">
          <label for="inputLive" class="width-30">银行卡号:</label>
          <b-form-input style="width:60%;display:inline-block"
                        id="inputLive"
                        v-model.trim="bankNumber"
                        type="number"
                        :state="bankState"
                        aria-describedby="inputLiveHelp inputLiveFeedback"
                        placeholder="输入您的银行卡号"></b-form-input>
          <b-form-invalid-feedback class="sr-only" id="inputLiveFeedback">
            请输入您的真实姓名
          </b-form-invalid-feedback>
        </div>
      </div>
    </div>
    <div class="row padding-tb-1">
      <div class="col-sm-6">
        <div role="group">
          <label for="inputLive" class="width-30">身份证号:</label>
          <b-form-input style="width:60%;display:inline-block"
                        id="inputLive"
                        v-model.trim="idCard"
                        type="number"
                        :state="idCardState"
                        aria-describedby="inputLiveHelp inputLiveFeedback"
                        placeholder="输入您的身份证号"></b-form-input>
          <b-form-invalid-feedback class="sr-only" id="inputLiveFeedback">
            请输入您的真实姓名
          </b-form-invalid-feedback>
        </div>
      </div>
    </div>
    <div class="row padding-tb-1">
      <div class="col-sm-6">
        <div role="group">
          <label for="inputLive" class="width-30">手机号:</label>
          <b-form-input style="width:60%;display:inline-block"
                        id="inputLive"
                        v-model.trim="telephone"
                        type="number"
                        :state="telephoneState"
                        aria-describedby="inputLiveHelp inputLiveFeedback"
                        placeholder="输入您的手机号"></b-form-input>
          <b-form-invalid-feedback class="sr-only" id="inputLiveFeedback">
            请输入您的真实姓名
          </b-form-invalid-feedback>
        </div>
      </div>
    </div>
    <div class="row padding-tb-1">
      <div class="col-sm-6">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入验证码">
          <span class="input-group-btn">
            <button class="btn btn-info" type="button" @click="sendMessage">发送验证码</button>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RealName',
  computed: {
    nameState () {
      return this.name.length > 1
    },
    bankState () {
      return this.bankNumber.length === 19
    },
    idCardState () {
      return this.idCard.length === 15 || this.idCard.length === 18
    },
    telephoneState () {
      return this.phoneReg.test(this.telephone)
    }
  },
  data () {
    return {
      name: '',
      bankNumber: '',
      idCard: '',
      phoneReg: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0,5-9]))\d{8}$/,
      telephone: ''
    }
  },
  methods: {
    sendMessage () {
      if (!(this.phoneReg.test(this.telephone))) {
        this.$alert('手机号码不正确')
      } else {
        this.$alert('发送验证码')
      }
    }
  }
}
</script>

<style scoped>

</style>

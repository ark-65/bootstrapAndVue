<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nameGroup"
                    prepend="Username"
                    label="请填写您的真实信息："
                    label-for="nameInput"
                    description="我们永远不会和其他人透露您的真实信息.">
        <b-input-group prepend="真实姓名">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="form.name"
                      :state="nameState"
                      required
                      placeholder="请输入您的真实姓名">
        </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="cardTypeGroup"
                    label-for="cardTypeInput">
        <b-form-select id="cardTypeInput"
                       :options="cardType"
                       required
                       v-model="form.idCardType">
        </b-form-select>
      </b-form-group>
      <b-form-group id="idCardGroup"
                    label-for="idCardInput">
        <b-input-group prepend="证件号码">
        <b-form-input id="idCardInput"
                      type="number"
                      v-model="form.idCard"
                      :state="idCardState"
                      required
                      placeholder="请输入证件号码">
        </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="bankNumberGroup"
                    label-for="bankNumberInput">
        <b-input-group prepend="银行卡号">
        <b-form-input id="bankNumberInput"
                      type="number"
                      v-model="form.bankNumber"
                      :state="bankState"
                      required
                      placeholder="请输入银行卡号">
        </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="phoneGroup"
                    label-for="phoneInput">
        <b-input-group prepend="手机号码">
        <b-form-input id="phoneInput"
                      type="number"
                      v-model="form.phone"
                      :state="telephoneState"
                      required
                      placeholder="确保手机号与银行预留手机一致">
        </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group>
        <b-input-group>
          <b-form-input type="number" min="0.00" required></b-form-input>
          <b-input-group-append>
            <b-btn variant="info" @click="getCode" @tag="getCode">{{message}}{{count}}</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">提交</b-button>
      <b-button type="reset" variant="danger">重置</b-button>
    </b-form>
  </div>
</template>


<script>
export default {
  name: 'Authentication',
  computed: {
    nameState () {
      return this.form.name.length > 1
    },
    bankState () {
      return this.form.bankNumber.length === 19
    },
    idCardState () {
      return this.form.idCard.length === 15 || this.form.idCard.length === 18
    },
    telephoneState () {
      return this.phoneReg.test(this.form.phone)
    }
  },
  data () {
    return {
      form: {
        idCard: '',
        name: '',
        phone: '',
        bankNumber: '',
        idCardType: null
      },
      timer: null,
      code: '',
      sended: false,
      count: '',
      message: '发送验证码',
      phoneReg: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0,5-9]))\d{8}$/,
      cardType: [
        { text: '请选择证件类型', value: null },
        '身份证', '军官证'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.name = ''
      this.form.idCard = ''
      this.form.bankNumber = ''
      this.form.phone = ''
      this.form.idCardType = null
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    getCode () {
      const TIME_COUNT = 60
      if (!this.sended) {
        if (this.phoneReg.test(this.form.phone)) {
          this.sended = true
          this.$alert('已发送验证码')
          this.message = '已发送验证码'
          // this.$http.get
          if (!this.timer) {
            this.count = TIME_COUNT
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.sended = false
                clearInterval(this.teimer)
                this.timer = null
                this.count = ''
                this.message = '发送验证码'
              }
            }, 1000)
          }
        } else {
          this.$alert('请输入正确的手机号')
        }
      } else {
        this.$alert('验证码已发送，' + this.count + '秒以后可再次发送')
      }
    }
  }
}
</script>

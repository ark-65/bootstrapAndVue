<template>
<b-form @submit='onSubmit'>
  <b-form-group id='nameGroup'
                label='姓名'
                label-for='name'>
    <b-form-input id='name'
                  type='text'
                  v-model='form.name'
                  :state='!$v.form.name.$invalid'
                  aria-describedby='nameLiveFeedback'
                  placeholder='请输入真实姓名' />
    <b-form-invalid-feedback id='nameLiveFeedback'>
      请输入您的真实姓名
    </b-form-invalid-feedback>
  </b-form-group>
  <b-form-group id='bankNumberGroup'
                label='银行卡号'
                label-for='bankNumber'>
    <b-form-input id='bankNumber'
                  type='text'
                  v-model='form.bankNumber'
                  :state='!$v.form.bankNumber.$invalid'
                  aria-describedby='bankNumberLiveFeedback'
                  placeholder='请输入您的银行卡号' />
    <b-form-invalid-feedback id='bankNumberLiveFeedback'>
      请输入正确的银行卡号
    </b-form-invalid-feedback>
  </b-form-group>
  <b-form-group id='idCardGroup'
                label='身份证号'
                label-for='idCard'>
    <b-form-input id='idCard'
                  type='text'
                  v-model='form.idCard'
                  :state='!$v.form.idCard.$invalid'
                  aria-describedby='idCardFeedback'
                  placeholder='请输入您的身份证号' />
    <b-form-invalid-feedback id='idCardFeedback'>
      请输入您的身份证号
    </b-form-invalid-feedback>
  </b-form-group>
  <b-form-group id='telephoneGroup'
                label='手机号'
                label-for='telephone'>
    <b-form-input id='telephone'
                  type='text'
                  v-model='form.telephone'
                  :state='!$v.form.telephone.$invalid'
                  aria-describedby='telephoneFeedback'
                  placeholder='请输入您的手机号' />
    <b-form-invalid-feedback id='telephoneFeedback'>
      确保和对应银行卡预留手机号一致
    </b-form-invalid-feedback>
  </b-form-group>
  <b-form-group id='exampleInputGroup1'
                label='验证码'
                label-for='exampleInput1'>
    <b-form-input id='exampleInput1'
                  type='text'
                  v-model='form.name'
                  :state='!$v.form.name.$invalid'
                  aria-describedby='input1LiveFeedback'
                  placeholder='请输入验证码' />
    <b-form-invalid-feedback id='input1LiveFeedback'>
      输入验证码
    </b-form-invalid-feedback>
  </b-form-group>
  <b-button type='submit'
            variant='primary'
            :disabled='$v.form.$invalid'>
    提交
  </b-button>
</b-form>
</template>

<script scope>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'myForm',
  data () {
    return {
      form: {}
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      bankNumber: {
        required,
        minLength: minLength(19)
      },
      idCard: {
        required,
        maxLength: maxLength(18),
        minLength: minLength(15)
      },
      telephone: {
        required,
        minLength: minLength(11),
        isUnique (value) {
          const phoneRegex = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0,5-9]))\\d{8}$/
          if (phoneRegex.test(value)) {
            return false
          }
        }
      }
    }
  },
  methods: {
    onSubmit () {
      // this.$http.post('http://localhost:3000/getjson/subInfo', {
      //   'name': this.name,
      //   'bankNumber': this.bankNumber,
      //   'idCard': this.idCard,
      //   'telephone': this.telephone,
      //   'code': this.code
      // }).then((res) => {
      //   this.$alert(res)
      // }).catch((err) => {
      //   this.$alert(err)
      // })
    }
  }
}
</script>

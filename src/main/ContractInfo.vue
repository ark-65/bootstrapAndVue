<template>
   <div class="container">
     <ul class="list-group">
       <li class="list-group-item active">合同详情</li>
       <a :href='item.href' v-for="(item) in items">
       <li class="list-group-item"  >
         {{item.name}}
       </li>
       </a>
     </ul>
   </div>
</template>

<script>
export default {
  name: 'ContractInfo',
  data () {
    return {
      id: '',
      items: ''
    }
  },
  created () {
    this.getParams()
  },
  methods: {
    getParams () {
      // 取到路由带过来的参数
      let routerParams = this.$route.params.id
      // 将数据放在当前组件的数据内
      this.id = routerParams
      this.$http.get('http://localhost:3000/getjson/ContractInfo', {
        params: {
          id: this.id
        }
      }).then((res) => {
        this.items = res.data.agreement
        console.log(res.data.agreement)
        console.log(this.id)
      }).catch((err) => {
        this.$alert(err)
      })
    }
  }
}
</script>

<style scoped>
.container{margin-top: 2em}
</style>

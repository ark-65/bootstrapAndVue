<template>
  <div class="row padding-1 ">
    <div class="page-header  width-100">
      <h3 class="text-center">
        任务列表
      </h3>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>流程名称</th>
        <th>当前节点</th>
        <th>反馈信息</th>
        <th>审批人</th>
        <th>提交时间</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in items" :data-id='item.id' @click="show(item.id)"  >
          <td name="id" hidden >{{item.id}}</td>
          <td>{{item.progress}}</td>
          <td>{{item.ndoe}}</td>
          <td>{{item.message}}</td>
          <td>{{item.approver}}</td>
          <td>{{item.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'TackList',
  data () {
    return {
      items: ''
    }
  },
  created () {
    this.request()
  },
  methods: {
    request () {
      this.$http.get('http://localhost:3000/getjson/TackList')
        .then((res) => {
          this.items = res.data.data
          console.log(this.items)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    show (index) {
      this.$http.get()
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 2em;
}
table{
  font-size: 1em;
}
</style>

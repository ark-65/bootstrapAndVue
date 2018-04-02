<template>
  <div class="row padding-l-1 padding-t-1">
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
        <tr v-for="(item) in items" :data-id='item.id' @click="show(item.id)" @tap="show(item.id)"   >
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
      this.$router.push({
        path: '/ContractInfo',
        name: 'ContractInfo',
        params: {
          'id': index
        }
      })
    }
  }
}
</script>

<style scoped>
  table{
    font-size: .5em;
  }
  .table th,table td {
    padding: .5em .3em;
  }
  .row{
    padding-right: 0;
  }
</style>

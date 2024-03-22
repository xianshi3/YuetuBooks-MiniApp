<template>
  <div>
    <!-- 用户公益申领申请部分 -->
    <section class="section">
      <h2>用户公益申领申请</h2>
      <ul>
        <li v-for="(application, index) in applications" :key="index">
          <div>
            <strong>{{ application.userName }}</strong>
            <p>申请原因：{{ application.reason }}</p>
            <p>状态：{{ application.status }}</p>
          </div>
          <div>
            <button @click="rejectApplication(index)">拒绝</button>
            <button @click="approveApplication(index)">批准</button>
          </div>
        </li>
      </ul>
    </section>

    <!-- 管理员管理部分 -->
    <section class="section">
      <h2>管理员管理</h2>
      <ul>
        <li v-for="(admin, index) in admins" :key="index">
          <div>
            <strong>{{ admin.name }}</strong>
            <p>邮箱：{{ admin.email }}</p>
          </div>
          <div>
            <button @click="editAdmin(index)">编辑</button>
            <button @click="deleteAdmin(index)">删除</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applications: [
        { id: 1, userName: '用户1', reason: '财务困难', status: '待审批' },
        { id: 2, userName: '用户2', reason: '医疗急救', status: '已批准' },
      ],
      admins: [
        { id: 1, name: '管理员1', email: 'admin1@example.com' },
        { id: 2, name: '管理员2', email: 'admin2@example.com' },
      ],
    };
  },
  methods: {
    rejectApplication(index) {
      // 实现拒绝申请逻辑
      console.log('拒绝申请:', this.applications[index]);
    },
    approveApplication(index) {
      // 实现批准申请逻辑
      console.log('批准申请:', this.applications[index]);
    },
    editAdmin(index) {
      // 实现编辑管理员逻辑
      console.log('编辑管理员:', this.admins[index]);
    },
    deleteAdmin(index) {
      // 实现删除管理员逻辑
      console.log('删除管理员:', this.admins[index]);
    },
  },
};
</script>

<style scoped>
.section {
  margin-bottom: 20px;
}
</style>
